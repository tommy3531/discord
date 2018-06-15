const request = require('request');
const url = 'https://api.github.com/users/tommy3531';
const endpoint = 'https://api.github.com/users';
const money = true;


const options = {
	url: endpoint,
	method: 'GET',
	headers: {
		'User-Agent': 'ua',
		'Accept': 'application/json'
	}
};


module.exports.run = async (bot, message, args) => {

	// Create a function return a promise
	function downloadData() {

		// Promise construstor takes two params: resolve, reject
		return new Promise((resolve, reject) => {
			request(options, (error, res, movieData) => {
				if(error) {
					reject(error);
				} else {
					resolve(movieData);
				}
			});
		});
	}

	function willGetPhone() {
		
		// return a promose #1
		console.log('Before I check my account');
		return new Promise((resolve, reject) => {

			// Check if you have money
			if(money) {

				// create the phone
				var phone = {
					brand: 'iPhoneX',
					color: 'Black'
				};

				// resolve promise
				resolve(phone);
			} else {
				// No money reject
				var reason = new Error('You are broke');
				reject(reason);
			}
		});
	}

	// Return the resolved promise 
	// downloadData()
	// 	.then(data => console.log(data))
	// 	.catch(data => console.log(error));

	// Return the promise
	willGetPhone()
		.then((phone) => 

			// #3
			console.log('This is your new phone', phone.brand));
	// #2
	console.log('After checking the account');

}

module.exports.help = {
	name: "test"
}