"use strict";
var baseDir = "./";

/*
var browserSync = require('browser-sync');

function lessMiddleware (req, res, next) {
    // Adapted directly from Browsersync exampes:
    //   https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection

    var parsed = require("url").parse(req.url);
    if (parsed.pathname.match(/\.less$/)) {
        return less(parsed.pathname).then(function (o) {
            res.setHeader('Content-Type', 'text/css');
            res.end(o.css);
        });
    }
    next();

    function less(src) {
        var f = require('fs').readFileSync('app' + src).toString();
        return require('less').render(f); 
    }
}
*/

function post ( req, res, next ) {
	if( req.method == 'POST' ) {
		var f = require('fs').readFileSync( baseDir + req.url ).toString();
		res.setHeader('Content-Type','application/json');
		res.end( f );
	};
	next();
}

/// Export configuration options
module.exports = {
	"files": [baseDir +"**/*.{js, html, css, json}"],
    "watchOptions": { ignored: ['node_modules'] },
	"server" : {
        "baseDir" : baseDir ,
        "index" : "index.html",
		"routes" : {
			"/collections/" : "./collections"
		},
		"middleware" : {
			2 : post
        }
    },
	
	"cors" : true,
    //"https" : true,
    //"browser" : ["google-chrome", "firefox"],
	/* 
	ui: {
    port: 8080,
    weinre: {
        port: 9090
    }
	*/
}