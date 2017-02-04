function getFromMongo( path, filter ) {
	require('mongodb').MongoClient.connect(dbUrl, function(err, db) {
		if(err) {
			console.log( err )
		} else {
			console.log("Connected successfully to server");
			db.close();
		}
	});
}

function postToMongo( path, data, filter ) {
	var ret = '[]';
	return ret;
}

function deleteFromMongo( path, filter ) {
	
}

exports.get   = getFromMongo;
exports.post  = postToMongo;
exports.del   = deleteFromMongo;