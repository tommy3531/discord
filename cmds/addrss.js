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
    	
    	// for(var i in feed) {
    	// 	let embed = new Discord.RichEmbed()
    	// 		.setDescription("Swift RSS")
    	// 		.setColor("#9B59B6")
    	// 		.addField("Title", `${feed[i]["title"]}`)
    	// 		.addField("Link", `${feed[i]["link"]}`)
    	// 		message.channel.send(embed);
    		
    	// }

  //   	var feedSchema = new mongoose.Schema({
  //   		title: String,
  //   		link: String
		// });

		// var Feed = mongoose.model("Feed", feedSchema);

		// var dummyFeed = {
		// 	title: "New RSS",
		// 	link: "http://newRss.com"
		// }

		var url = db.mongoURL;

		mongoClient.connect(url, function(err, dbase) {
			if (err) {
				console.log("Sorry error", err);
			} else {
				var count = 0;
				var dbo = dbase.db("rssfeeds");
				console.log("Connection Succesful", url);
				for(var i in feed) {
					toFeed(feed[i], dbo);	

					// ++count;
				}
				dbase.close();
				// console.log("We added", count);
				// saveData();
			}
		});

		function toFeed(feed, db){
			console.log(feed["title"]);
			console.log(feed["link"]);
			dbo.collection("feeds").insert({
				title: feed['title'],
				ink: feed['link']
			});
		}

		function saveData() {
			var feed = new Feed(dummyFeed);
			feed.save(feed);
			console.log(feed.title);
			console.log(feed.link);
			
		}

		function findData() {

		}

	});   
}
module.exports.help = {
	name: "addrss"
}





