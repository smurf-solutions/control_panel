"use strict";
let dbUrl = 'mongodb://127.0.0.1:27017/';

function find( dbname, collection, params, callback ) {
	require('mongodb').MongoClient.connect(dbUrl + dbname, function(err, db) {
		if(err) {
			console.log( err )
		} else {
			db.collection( collection )
			  .find( params.filter || {} )
			  .toArray(function( err, items ){
					db.close();
					var ret = { data: items };
					callback( ret );
			  });
		}
	});
}

function update( dbname, collection, filter, data, callback ) {
	var ret = '[]';
	require('mongodb').MongoClient.connect(dbUrl + dbname, function(err, db) {
		if(err) {
			console.log( err );
		} else {
			//return;
			console.log( typeof data );
			console.log( data );
			
			db.collection( collection ).insert(data, function(err,res){
				//console.log( res.connection.Connection.id );
				var ret = { success: 1, msg:{title:"Save",msg:"ID = "+res} };
				callback( ret );
				db.close();
			});
			//db.collection( collection ).insert({name:"svetlio", children:["viki","krisi"]});
		}
	});
	return ret;
}

function insert( dbname, collection, filter, callback ) {
	cllback({success: true})
}

function remove( dbname, collection, filter, callback ) {
	callback({success: true});
}

exports.find    = find;
exports.update  = update;
exports.insert  = insert;
exports.remove  = remove;