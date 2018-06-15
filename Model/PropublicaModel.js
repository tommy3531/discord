
class Propublica {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	sayHello() {
		console.log('Hello PropublicaModel, my name is ' + this.name + ', I have ID: ' + this.id);
	}
}



// function getPerson() {
// 	let user = new Person("Tom");
// 	console.log(person.sayHello());
// }





// function getAllTags() {
// 	feedbin.taggings.getAll()
// 		.then(taggings => {
// 			console.log(taggings);
// 		});
// }

// module.exports.getAllTags = getAllTags;
module.exports = new Propublica();