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
    rimraf      = require('rimraf')

var packageJson = require('./package.json');
var root = 'client';
var rootJs = 'js';

// helper method to resolveToApp paths
var resolveTo = function(resolvePath) {
	return function(glob) {
		glob = glob || '';
		return path.resolve(path.join(root, resolvePath, glob));
	}
};

var resolveToApp = resolveTo(rootJs); // app/{glob}
var resolveToComponents = resolveTo(rootJs+'/components'); // app/components/{glob}
var resolveToCommon = resolveTo(rootJs+'/common');

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
	require('chokidar-socket-emitter')({port: 8081, path: 'client', relativeTo: 'client'})
	serve({
		port: process.env.PORT || 3001,
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
		  return gulp.src('client/index.html')
				.pipe(htmlreplace({
					'js': ['system.js', 'app.min.js']
				}))
				.pipe(gulp.dest(paths.dist));
		})
		.then(function() { // copy system.js file
			var baseUrl = packageJson.jspm.directories.baseURL;
			var packagesFolder = packageJson.jspm.directories.packages;
			packagesFolder = typeof packagesFolder === 'undefined'? 'jspm_packages': packagesFolder; 
			var basePath = baseUrl+'/'+packagesFolder;

			return gulp.src(basePath+'/system.js', {base: basePath})
				.pipe(gulp.dest(paths.dist));
		});
});

var generateComponent = function(type) {
	var cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	var name = yargs.name;
	var parentPath = yargs.parent || '';
	var resolveToWhat = (type == 'common')? resolveToCommon: resolveToComponents;
	var destPath = path.join(resolveToWhat(), parentPath, name);

	return gulp.src(paths.blankTemplates)
		.pipe(template({
			name: name,
			upCaseName: cap(name)
		}))
		.pipe(rename(function(path){
			path.basename = path.basename.replace('temp', name);
		}))
		.pipe(gulp.dest(destPath));
};

gulp.task('component.component', function() {
	return generateComponent('component');
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
