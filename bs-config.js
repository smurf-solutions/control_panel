/** Help on:
		 https://browsersync.io/docs/options/
		 https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection
*/
"use strict";

module.exports = {
	files : ["**/*.{js, html, css, json}"],
    watchOptions : { ignored: ['node_modules'] },
	server : {
        baseDir : './' ,
        index : "index.html",
		middleware : {
			2 : require("./REST/middleware.js").RESTMiddleware
        }
    },
	https: true,
	cors : true,
	notify: false,
}