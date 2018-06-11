const Discord = require("discord.js");
const Feed = require('rss-to-json');
const FeedSub = require('feedsub');
const mongoose = require('mongoose');
const db = require('../db');
const mongoClient = require('mongodb').MongoClient;



module.exports.run = async (bot, message, args) => {

	Feed.load('http://developer.apple.com/swift/blog/news.rss', function(err, rss){
    	var feed = [];
    	var items = rss['items'];
    	for (var i = items.length - 1; i >= 0; i--) {
    		var feedObj = {
    			title: items[i]["title"],
    			link: items[i]["link"]
    		};
    		feed.push(feedObj)
    	}
    	
		var url = db.mongoURL;

		mongoClient.connect(url, (err, dbase) => {
			if (err) {
				console.log("Sorry error", err);
			} else {
				var count = 0;
				var dbo = dbase.db("rssfeeds");
				var feedsCollection = dbo.collection("feeds");
				console.log("Connection Succesful", url);
				for(var i in feed) {
					toFeed(feed[i], feedsCollection);	
				}
				dbase.close();
			}
		});

		function toFeed(feedObject, collection){
			var record = 0;
			collection.insert(feedObject, (err, feedInsert) => {
				if(err) {
					console.log("Bad");
				}
				console.log("All Feeds Inserted")
			});
		}
	});   
}
module.exports.help = {
	name: "rss"
}





