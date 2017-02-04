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


function getFromFile( file, filter ) {
		var ret = '[]';
		file = '.'+file;
		
		if( _fileExists( file ) ) {		
			ret = fs.readFileSync( file ).toString();
		} 
		return ret;
};
	
function postToFile( file, data, filter ) {
	var ret = '[]';
	return ret;
};

function deleteFromFile( file, filter ) {
	var ret = [];
	return ret;
};


exports.get    = getFromFile;
exports.post   = postToFile;
exports.del    = deleteFromFile;