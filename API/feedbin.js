const request = require('request');
const Feedbin = require('feedbin-nodejs');
const feedbin = new Feedbin('thomas.j.marler@gmail.com', '!!TTommy3531');


function getSubscriptions() {
	feedbin.subscriptions.getAll()
		.then(subscriptions => {
			console.log(subscriptions);
		});
}

function getSubscriptionByID(id) {
	feedbin.subscriptions.get(id)
		.then(subscriptionByID => {
			console.log("*****************************************************");
			console.log(subscriptionByID);
			console.log("*****************************************************");

		});
}
module.exports.getSubscriptions = getSubscriptions;
module.exports.getSubscriptionByID = getSubscriptionByID;