const mongoose = require('mongoose');
const ProPublica = require('../RSS/propublica');
const feedbin = require('../API/feedbin');

module.exports.run = async (bot, message, args) => {

	// console.log("Feed.js");
	var allSubscriptions = feedbin.getSubscriptions();
	var specificSubscription = feedbin.getSubscriptionByID(4405870);

	console.log("*****************************************************");
	console.log("This is from feed.js");
	console.log("This is all Subscirptions", allSubscriptions);
	console.log("This is specific Subscription", specificSubscription);
	console.log("End of feed.js");
	console.log("*****************************************************");

}

module.exports.help = {
	name: "feed"
}