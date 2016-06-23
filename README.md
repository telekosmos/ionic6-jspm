# Ionic-jspm-ES6 skeleton
A skeleton/starter/boilerplate/whatchamacallit to kindle a project based on:
- __[jspm](http://jspm.io)__ as client package manager and bundle tool
- __babel 5__  to provide ES6 capabilites (transpilation and, via jspm, runtime support)
- __gulp__ as task runner
- __[ionic](http://ionicframework.com)__ as mobile framework
- __[angular](http://angularjs.org)__ as underlying MVC framework
- __karma__, __mocha__, __chai__ as testing framework stack

Ready to use with __cordova__/__ionic__.

## Features
- ES6 codebase
- Ionic sidemenu-like starter example application
- Component based project structure
- Fairly few components provided in the skeleton, trying to show different scenarios
- Livereload (via __browser-sync__)
- Development with sourcemaps
- Assets referenced by packages (like fonts or images) added to build (check [this](https://github.com/systemjs/plugin-css/issues/23), [this](https://github.com/systemjs/builder/issues/166) and mostly [this](https://github.com/systemjs/plugin-css/issues/61)).
- Application assets are also made available for production on build time
- SASS support (check [feat/sass](https://github.com/telekosmos/ionic6-jspm/tree/feat/sass) branch)

## Usage

### Installation

	git clone http://github.com/telekosmos/ionic6-jspm && cd ionic6-jspm
	npm install
	jspm install
	
	
### Development
To see the application in your browser and get auto reload every time a file is changed use:

	gulp serve
to see the application (usually at [http://localhost:3002](http://localhost:3002))
### Mobile app
You must `gulp build` to get the application ready to be compiled with either `cordova` or `ionic` 

	gulp build
This command

- bundle the javascript via `jspm bundleSFX` (transpiling)
- __uglify__ the transpiled code
- copies the transpiled file to the build directory (default is `www` to follow the `cordova` standard)
- copies the necessary files referenced by jspm packages
- copies the application assets

The production bundle is placed in the __`www`__ folder and is ready to build the mobile app by `cordova` 

	cordova platform add ios
	cordova build ios
	cordova prepare ios
	cordova emulate ios
or, if using `ionic` the commands are the same (replacing `cordova` for `ionic`) except when adding a platform:

	ionic platform ios

### Resources
You can use either [phonegap-res](https://github.com/macdonaldr93/phonegap-res) or [splash-n-icons](https://github.com/telekosmos/splash-n-icons) in order to generate splash and icon resources for both android and/or ios from one single file for icons and another for splashes.

	
### License

MIT

### Future?

- Add support for SCSS
- Add support for Babel6
- Better gulp task management

