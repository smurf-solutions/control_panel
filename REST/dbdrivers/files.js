"use strict";

var fs = require('fs');

function _fileExists( file ) {
	try { 
		if( fs.statSync( file ).isFile() ) 
			return true;
		else 
			console.log( 'File '+file+' is not a file' ); 
	} catch(err) {
		console.log( 'File '+file+' not exists' ); 
	}
	return false;
}


function getFromFile( dirname, filename, filter, callback ){
		var file = ('./collections/'+dirname+'/'+filename).replace(/\/\//g,"/");
		if( _fileExists( file ) ) {		
			fs.readFile( file, 'utf8', function( err, data ){
				if( !err )
					callback( data.toString() );
				else
					console.log( err );
			} );
		} else callback({});
};
	
function postToFile( dirname, filename, data, filter, callback ) {
	var ret = '{"success":true, "msg":{"title":"Demo","msg":"Demo Mode can not save"}}';
	callback( ret );
};

function deleteFromFile( dirname, filename, filter, callback ) {
	var ret = '{"success":true, "msg":{"title":"Demo","msg":"Demo Mode can not save"}}';
	callback( ret );
};


exports.get    = getFromFile;
exports.post   = postToFile;
exports.del    = deleteFromFile;