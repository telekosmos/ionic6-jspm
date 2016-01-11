var gulp        = require('gulp'),
    path        = require('path'),
    jspm        = require('jspm'),
    rename      = require('gulp-rename'),
    template    = require('gulp-template'),
    uglify      = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    ngAnnotate  = require('gulp-ng-annotate'),
    serve       = require('browser-sync'),
    yargs       = require('yargs').argv,
    rimraf      = require('rimraf');

var camelCase = require('lodash.camelCase');

var root = 'www';

// helper method to resolveToApp paths
var resolveTo = function(resolvePath) {
	return function(glob) {
		glob = glob || '';
		return path.resolve(path.join(root, resolvePath, glob));
	}
};

var resolveToApp = resolveTo('js'); // app/{glob}
var resolveToComponents = resolveTo('js/components'); // app/components/{glob}
var resolveToCommon = resolveTo('js/common');

// map of all our paths
var paths = {
	css: resolveToApp('**/*.css'),
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
	dist: path.join(__dirname, 'dist/')
};

gulp.task('serve', function(){
	'use strict'
	console.log('Serving and reloading for css at '+paths.css);
	require('chokidar-socket-emitter')({port: 8082, path: 'www', relativeTo: 'www'});
	serve({
		port: process.env.PORT || 3333,
		open: false,
		files: [].concat(
			[paths.css],
			paths.html
		),
		server: {
			baseDir: root,
			// serve our jspm dependencies with the client folder
			routes: {
				'/jspm.config.js': './jspm.config.js',
				'/jspm_packages': './jspm_packages'
			}
		},
	});
});

gulp.task('build', function() {
	var dist = path.join(paths.dist + 'app.js');
	rimraf.sync(path.join(paths.dist, '*'));
	// Use JSPM to bundle our app
	return jspm.bundleSFX(resolveToApp('app'), dist, {})
		.then(function() {
			// Also create a fully annotated minified copy
			return gulp.src(dist)
				.pipe(ngAnnotate())
				.pipe(uglify())
				.pipe(rename('app.min.js'))
				.pipe(gulp.dest(paths.dist))
		})
		.then(function() {
			// Inject minified script into index
		  return gulp.src('www/index.html')
				.pipe(htmlreplace({
					'js': 'app.min.js'
				}))
				.pipe(gulp.dest(paths.dist));
		});
});

var generateComponent = function(type) {
	var cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	var name = camelCase(yargs.name);
	// console.log('component name: '+yargs.name+' (vs '+name+')');
	var parentPath = yargs.parent || '';
	var resolveToWhat = (type == 'common')? resolveToCommon: resolveToComponents;
	var destPath = path.join(resolveToWhat(), parentPath, name);

	return gulp.src(paths.blankTemplates)
		.pipe(template({
			name: name,
			type: type,
			upCaseName: cap(name)
		}))
		.pipe(rename(function(path){
			path.basename = path.basename.replace('temp', name);
		}))
		.pipe(gulp.dest(destPath));
};

gulp.task('component.component', function() {
	return generateComponent('components');
});
gulp.task('common.component', function() {
	return generateComponent('common');
});

/*
gulp.task('component', function(){
	var cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	var name = yargs.name;
	var parentPath = yargs.parent || '';
	var destPath = path.join(resolveToComponents(), parentPath, name);

	return gulp.src(paths.blankTemplates)
		.pipe(template({
			name: name,
			upCaseName: cap(name)
		}))
		.pipe(rename(function(path){
			path.basename = path.basename.replace('temp', name);
		}))
		.pipe(gulp.dest(destPath));
});
*/

gulp.task('default', ['serve'])
