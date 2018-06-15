const request = require('request');
const api = "https://api.propublica.org/congress/v1/115/senate/members.json";
const Congress = require('propublica-congress-node');
const client = new Congress("SpzjlPZlkMlPKKGCLQS1OqZtCN96lPl7sszOTKra");

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
	// client.memberLists({
	//     congressNumber: '115',
	//     chamber: 'house'
	//   }).then(function(res) {
	//     console.log(res["results"][0]["members"]);
	});


}

module.exports.help = {
	name: "political"
}