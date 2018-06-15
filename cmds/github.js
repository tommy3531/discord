const request = require('request-promise');
const endpoint = 'https://api.github.com/users';

const urls = [
	`${endpoint}/tommy3531`,
	`${endpoint}/tommy3531/repos`,
	`${endpoint}/tommy3531/subscriptions`,

];


module.exports.run = async (bot, message, args) => {


	try {

		// Return 3 promises instead of 3 strings
		// return just returns the resolved promise
		// urls.map(url) - creates an array of three promises
		// map function iterates over an array and returns something of each part of the array

		// Loop over each url and return the promise 
		// Promise.all tells me when all promises are done
		// request-promise is a wrapper so you can work with promises
		const [profile, repos, subs] = await Promise.all(urls.map((url) => {
			return request({
				url,
				method: 'GET',
				headers: {
					'User-Agent': 'ua',
					'Accpet': 'application/json'
				}
			});
		}));

		// wait until all three promises are done
		// await Promise.all(urls.map((url) => {
		// 	const promise = request({
		// 		url,
		// 		method: 'GET',
		// 		headers: {
		// 			'User-Agent': 'ua',
		// 			'Accpet': 'application/json'
		// 		}
		// 	});

		// 	// Print out each url
		// 	console.log('done', url);
		// }));

		// // Print async done after all three url are displayed at sametime
		// console.log('async done');

		console.log('Profile: ', profile);
		console.log('Repos: ', repos);
		console.log('Sub: ', subs);


	} catch(e) {

		console.log(e.message);
	}
}

module.exports.help = {
	name: "github"
}




