const feedbin = require('../API/Feedbin/subscription');
const feedbinTags = require('../API/Feedbin/tags');
const FeedbinModel = require('../model/FeedBinModel');

module.exports.run = async (bot, message, args) => {

	console.log("Feed.js");
	var allSubscriptions = feedbin.getSubscriptions();
	// var specificSubscription = feedbin.getSubscriptionByID(4405870);
	// var getAllTags = feedbinTags.getAllTags();

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
	console.log("This is all Subscirptions", allSubscriptions);
	// console.log("This is specific Subscription", specificSubscription);
	// console.log("End of feed.js");
	// console.log("*****************************************************");
	// console.log(getAllTags);
}

module.exports.help = {
	name: "feed"
}