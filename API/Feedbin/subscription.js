const request = require('request');
const Feedbin = require('feedbin-nodejs');
const feedbin = new Feedbin('thomas.j.marler@gmail.com', '!!TTommy3531');


function getSubscriptions() {
	feedbin.subscriptions.getAll()
		.then(subscriptions => {
			var count = 0;
			console.log("This is from subscriptions.js");
			for(var i in subscriptions) {
				console.log("subscriptions.js inside getSubscriptions function")
				console.log(subscriptions[i]["title"]);	
				console.log(subscriptions[i]["feed_url"]);
			}
		});
}

function getSubscriptionByID(id) {
	feedbin.subscriptions.get(id)
		.then(subscriptionByID => {
			// console.log("*****************************************************");
			// console.log(subscriptionByID);
			// console.log("*****************************************************");

		});
}

module.exports.getSubscriptions = getSubscriptions;
module.exports.getSubscriptionByID = getSubscriptionByID;
