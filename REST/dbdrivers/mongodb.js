"use strict";
//let dbUrl = 'mongodb://127.0.0.1:27017/';

function find( dbname, collection, params, callback ) {
	var dbUrl = params.dbUrl
	require('mongodb').MongoClient.connect(dbUrl + dbname, function(err, db) {
		if(err) {
			console.log( err )
		} else {
			if( !params.token ) params.token = [];
			let user = params.token[0] ? params.token[0] : '*';
			let pass = params.token[1] ? params.token[1] : '*';
			db.authenticate( user, pass, function(err,res){
				if( res ) {
					db.collection( collection )
					  .find( params.filter || {} )
					  .toArray(function( err, items ){
							db.close();
							var ret = { data: items };
							callback( ret );
					  });
				} else {
					callback( { access: 'DENIDED', msg:{type:"error",title:err.name, msg:err.message} } );
				}
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