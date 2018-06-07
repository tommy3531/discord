const api = "https://api.propublica.org/congress/v1/115/senate/members.json";
const Congress = require('propublica-congress-node');
const client = new Congress("SpzjlPZlkMlPKKGCLQS1OqZtCN96lPl7sszOTKra");

module.exports.run = async (bot, message, args) => {
	client.memberLists({
	    congressNumber: '115',
	    chamber: 'house'
	  }).then(function(res) {
	    console.log(res["results"][0]["members"]);
	});
}

module.exports.help = {
	name: "political"
}