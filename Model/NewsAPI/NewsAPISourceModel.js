class NewsAPISourceModel {
	constructor(id, name, description, url, category, language, country) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.url = url;
		this.category = category;
		this.language = language;
		this.country = country;
	}

	sayHello() {
		console.log("This is the id: ". this.id);
		console.log("This is the name: ", this.name);
		console.log("This is the description: ", this.description);
		console.log("This is the url: ", this.url);
		console.log("This is the category: ", this.category);
	}
}
module.exports = new NewsAPIModel();