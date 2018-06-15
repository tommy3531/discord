const request = require('request');
const Feedbin = require('feedbin-nodejs');
const feedbin = new Feedbin('thomas.j.marler@gmail.com', '!!TTommy3531');


function getAllTags() {
	feedbin.taggings.getAll()
		.then(taggings => {
			console.log(taggings);
		});
}

module.exports.getAllTags = getAllTags;