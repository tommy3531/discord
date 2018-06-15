const money = 'true';

module.exports.run = async (bot, message, args) => {

	// Create a promise
	const willGetNewPhone = new Promise((resolve, reject) => {

		// If bank account
		if(money) {

			// Create phone
			const phone = {
				brand: 'iPhone',
				color: 'Blue'
			};

			resolve(phone);
		} else {
			const reason = new Error('You broke');
			reject(reason);
		}
	});

	// Use async since we need to return promise
	// This is only called if you have money
	async function showOff(phone) {
		return new Promise((resolve, reject) => {
			const message = 'Hey friend, I have a new ' + phone.brand + ' ' + phone.color + 'phone';
			resolve(message);
		});
	}

	// lets ask the bank
	async function askBank() {
		try {
			console.log('Before we ask bank');

			// Since using async we can use await
			let phone = await willGetNewPhone;
			let message = await showOff(phone);
			console.log('After asking the bank');
			console.log(message);
		} catch(reason) {
			console.log(e.message);
		}
	}

	(async () => {
		await askBank();
	})();

}


module.exports.help = {
	name: "rp"
}