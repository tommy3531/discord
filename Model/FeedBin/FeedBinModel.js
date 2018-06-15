/*
	Think of module.exports as the variable that gets returned from require()
	it is an empty object by default.

*/


class FeedBinModel {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	sayHello() {
		console.log('Hello FeedBinModel, my name is ' + this.name + ', I have ID: ' + this.id);
	}

	getName() {
		console.log("This is the name ", this.name);
	}
}
module.exports = new FeedBinModel();