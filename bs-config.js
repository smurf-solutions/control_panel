/** Help on:
		 https://browsersync.io/docs/options/
		 https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection
*/
"use strict";

var config = {
	port     : 3000,
	folder   : '',
	dbPrefix : 'collections',
	dbUrl    : 'mongodb://127.0.0.1:27017/',
	https    : 'ssl/smurf-bg.com',
}


module.exports = {
	port: config.port,
	files : ["**/*.{no-watch}"], watchOptions : { ignored: ['node_modules'] },
	server : {
        baseDir : './'+config.folder,
		middleware : {
			0 : null,
			1 : null,
			//2 : require('comporession')(),
			//3 : function( req,res,next ) { req.dbUrl = config.dbUrl;next() },
			//4 : function( req,res,next ) { req.dbPrefix = config.dbPrefix;next() },
			//5 : require("./REST/rest.middleware.js")
        }
    },
	logLevel: "debug",
	ui: null,
	https: config.https ? true : false,
	cors : true,
	notify: false,
}