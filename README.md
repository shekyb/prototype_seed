# Prototype seed

Seed for SPA prototypes built with node, express, angular and ui router, gulp as task runner, Bootstrap css and FontAwesome.

## Dependancies
You need to have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com) installed on your machine.

## Usage

1. Clone repository to your local machine and enter the folder

 ```
 git clone https://github.com/shekyb/prototype_seed.git
 cd prototype_seed
 ```

2. Install node modules

 ```
 npm install
 ```

3. Build files and run the server
 
 Run the development environment (no files minifications):

 ```
 gulp serve
 ```
 The app will be served at `http://localhost:4040/`. This task watches for file changes and reloads the browser if you are using [livereload plugin](http://help.livereload.com/kb/general-use/browser-extensions)
 To run the production environment, add `--production` flag to the server command

 ```
 gulp serve --production
 ```
 Production app will be served at `http://localhost:4000/`. This task also watches for changes, builds files and reloads the browser.

4. Resarting the server

 By default server will restart whenever a change in `server.js` or `gulpfile.js` is detected. If you want to restart the server on your own, without building the files just type `rs` in the terminal while server is running.

## Folder sutrcuture
```
prototype_seed
	|- app
	|   |- js 
	|   |  |- app.js //it will always be first when running concat, this is where app is instatiated
	|   |  |- stateDebugger.js //module for debugging ui router state transitions (http://stackoverflow.com/questions/20745761/what-is-the-angular-ui-router-lifecycle-for-debugging-silent-errors#answer-26086754)
	|   |- sass //put all sass files here
	|   |  |- _prefixer.scss // prefix mixins from materialize css framework 
	|   |  |- default.scss 
	|   |- partials //put all partial html files here
	|       |- home.html
	|- dev
	|   |- assets
	|   |	 |- css //scss files will be processed here as 'default.css'
	|   |	 |- js //js files will be concataneted here as 'scripts.js'
	|   |- partials //all html partials will be moved here
	|   |- index.html
	|- prod
	|   |- assets
	|   |	 |- css //scss files will be processed here as 'default.min.css'
	|   |	 |- js //js files will be concataneted here as 'scripts.min.js'
	|   |- partials //all html partials will be moved here
	|   |- index.html
	|- node_modules //holds all dependancies, will be generated after running 'npm install'
	|- gulpfile.js
	|- package.json
	|- server.js //holds server routes and serves static resources for development environment
	|- server-prod.js //holds server routes and serves static resources for production environment
	|- README.md
```

By default `index.html` loads Bootstrap and Fontawesome css. If you don't want to use them, just remove the links from `index.html`
