"use strict";
/** Help on:
		 https://browsersync.io/docs/options/
		 https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection
*/

var dbDriver = require( './dbdrivers/files.js' );
//var dbDriver = require( './dbdrivers/mongodb.js' );

/** --- REST ---
	GET    //collections/DB/TABLE[?where=WHERE]
	POST   //collections/DB/TABLE
				post data: {id:1,name:'NAME'}   # ако няма id прави нов запис
	DELETE //collections/DB/TABLE?wher=WHERE
*/
function RESTMiddleware ( req, res, next ) {
    if (req.url.match(/^\/collections\//)) {
			res.setHeader('Content-Type','application/json');
			var content = '[]'
			switch( req.method ) {
				case 'GET': 
					content = dbDriver.get( req.url ) || content;
					break;
				case 'POST':
					content = dbDriver.post( req.url ) || content;
					break;
				case 'DELETE':
					content = dbDriver.del( req.url ) || content;
					break;
			}
			res.end( content )
	} else {
		next();
	}
}


module.exports = {
	files : ["**/*.{js, html, css, json}"],
    watchOptions : { ignored: ['node_modules'] },
	server : {
        baseDir : './' ,
        index : "index.html",
		middleware : {
			2 : RESTMiddleware
        }
    },
	https: true,
	cors : true,
	notify: false,
}