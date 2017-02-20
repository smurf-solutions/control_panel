/** --- REST Middleware ---
		# листване на данни
	GET    //collections/DB/TABLE [?find={CRITERIA}] [&projection={PROJ_FIELDS}] [&limit=NUMBER] [&sort={SORT_CRITERIA}]
		# упдейт само на поле
	GET    //collection/DB/TABLE?update={CRITERIA}&data={DATA}[&multy=1]
		# смяна или вмъкване на цял документ
	GET    //collection/DB/TABLE?insert={DATA}
	POST   //collections/DB/TABLE
				post data: {id:1,name:'NAME'}   # ако няма id прави нов запис
		# изтриване
	GET    //collection/DB/TABLE?remove={CRITERIA}[&onlyOne=1]
	DELETE //collections/DB/TABLE?remove={CRITERIA}[&onlyOne=1]
 */
 
"use strict";
 
//var dbDriver = require( './dbdrivers/jsonfiles.js' );
var dbDriver = require( './dbdrivers/mongodb.js' );

var parser = require("./parser.js");

function send( res, ret ) {
	if(typeof ret == 'object') ret = JSON.stringify(ret);
	res.end( ret.toString() );
}

module.exports = function( req, res, next ) {
	if (req.url.match(/^\/collections\//)) {		
		var urlParts = req.url.split("collections/")[1].split("?");
		var [ dbname, collection ] = urlParts[0].split("/");
		var params = parser.parseUrlParams( urlParts[1] );
		params.token = parser.parseToken( req.headers );
		if( req.dbUrl ) params.dbUrl = req.dbUrl;

		// DEBUG ONLY
		params.token = [ 'siso', '1234' ];
		console.log( params )
		//// DEBUG ONLY
		
		res.setHeader('Content-Type','application/json');
		
		switch( req.method ) {
			case 'GET'   : 
				switch( params.action ) {
					case 'find'   : dbDriver.find( dbname, collection, params, function(ret){ 
							send( res, ret );
						}); break;
					case 'update' : dbDriver.update( dbname, collection, params.filter, params.data||{}, function( ret ){ 
							send( res, ret ); 
						});break;
					case 'insert' : dbDriver.insert( dbname, collection, params.data||{}, function( ret ){ 
							send( res, ret ); 
						});break;
					case 'remove' : dbDriver.delete( dbname, collection, params.filter, function( ret ){ 
							send( res, ret ); 
						});break;
				}	
				break;
			case 'POST'  : req.on('data', function( data ) {
					data = JSON.parse(data.toString());
					switch( params.action ) {
						case 'update' : dbDriver.update( dbname, collection, params.filter, data, function( ret ){ 
								send( res, ret ); 
							} );
						case 'insert' : dbDriver.insert( dbname, collection, data, function( ret ){ 
								send( res, ret ); 
							});break;
					}
				}); break;
			case 'DELETE': dbDriver.remove( dbname, collection, params.filter, function(ret){ 
					send( res, ret );
				}); break;
		}
	} else if( req.method=="POST" ) {
		require('fs').readFile( "index.html", 'utf8', function( err, data ){
				if( !err ) res.end( data.toString() );
		});
	} else {
		next();
	}
}
