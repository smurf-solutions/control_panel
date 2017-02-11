/** URL parser 
		http://collections/DBNAME/COLLECTION?FILTER&ACTION1&ACTION2... 
**/

"use strict";

function parseJson( value ) {
	var ret = {};
	try {
		eval( 'ret = (' + value + ');');
	} catch( err ) {}
	return ret;
}

function parseUrlParams( path ) {
	var params = { action: "find", filter: {} };
	
	if(path) {
		path.split('&').forEach(function(v){
			var [ key, value ] = v.split("=");
			switch( key ) {
				case 'find'       : params.action = "find"; params.filter = parseJson( value ); break;
				case 'projection' : params.projection = parseJson( value ); break;
				case 'limit'      : params.limit = parseInt( value ); break;
				case 'sort'       : params.sort = parseInt( value ); break;
					
				case 'update'     : params.action = "update"; params.filter = parseJson( value ); break;
				case 'data'       : params.data = parseJson( value ); break;
				case 'multy'      : params.multy = true; break;
					
				case 'insert'     : params.action = "insert"; params.data = parseJson( value ); break;
				
				case 'remove'     : params.action = "remove"; params.filter = parseJson( value ); break;
				case 'onlyOne'    : params.onlyOne = true; break;
			}
		});
	}
	return params;
}

exports.parseUrlParams = parseUrlParams;
