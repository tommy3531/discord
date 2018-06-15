// const mongoose = require('mongoose');
// const ProPublica = require('../RSS/propublica');
// const feedbin = require('../API/Feedbin/subscription');
// const feedbinTags = require('../API/Feedbin/tags');
// const PropublicaModel = require('../Model/PropublicaModel');
// const FeedbinModel = require('../Model/FeedBin/FeedBinModel');
// // const FeedBinManager = require('../Manager/FeedBinManager');
// const NewsApiTopHeadLines = require('../API/NewsApi/NewsApiTopHeadline');
// const NewsApiClient = require('../API/NewsApi/NewsApiClient');
const request = require('request');

module.exports.run = async (bot, message, args) => {
	const options = {
		url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'X-API-KEY': 'SpzjlPZlkMlPKKGCLQS1OqZtCN96lPl7sszOTKra'
		}
	};

	console.log("Feed.js");
	request(options, function(err, res, body) {
		console.log(body);
	});

	// Get Sources
	// NewsApiClient.getAllSources()

	// Top headlines for a specific country
	// NewsApiTopHeadLines.topHeadLine("us");

	// Get Subscritions from feed
	// feedbin.getSubscriptions();
	// feedbin.getSubscriptions();

	// console.log(allSubscriptions);

	// PropublicaModel.id = 1;
	// PropublicaModel.name = "Tom";
	// PropublicaModel.sayHello();

	// FeedbinModel.id = 2;
	// FeedbinModel.name = "Tom_FeedBin";
	// // console.log(FeedbinModel.name())

	// FeedbinModel.sayHello();
	// FeedbinModel.getName();


	// console.log("*****************************************************");
	// console.log("This is from feed.js");
	// console.log("This is all Subscirptions", allSubscriptions);
	// console.log("This is specific Subscription", specificSubscription);
	// console.log("End of feed.js");
	// console.log("*****************************************************");
	// console.log(getAllTags);
}

module.exports.help = {
	name: "feed"
}





