const Discord = require("discord.js");
const Feed = require('rss-to-json');
const FeedSub = require('feedsub');
const mongoose = require('mongoose');
const db = require('../db');
const mongoClient = require('mongodb').MongoClient;



module.exports.run = async (bot, message, args) => {

	var url = db.mongoURL;

	mongoClient.connect(url, (err, dbase) => {
		if (err) {
			console.log("Sorry error", err);
		} else {
			var count = 0;
			var dbo = dbase.db("rssfeeds");
			var dbCollection = dbo.collection("feeds");

			console.log("Connection Succesful", url);
			console.log(dbCollection.find({}).toArray((err, result) => {
				if(err) throw err;
				console.log(result);
				dbase.close();
			}));
		}
		// console.log("We added", count);
		// saveData();
	});

}

module.exports.help = {
	name: "swiftrss"
}