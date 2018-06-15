class NewsAPIModel {
	constructor(source, author, title, url, urlToImage) {
		this.source = source;
		this.author = author;
		this.title = title;
		this.url = url;
		this.urlToImage = urlImage;
	}

	sayHello() {
		console.log("This is the source: ". this.source);
		console.log("This is the author: ", this.author);
		console.log("This is the title: ", this.title);
		console.log("This is the url: ", this.url);
		console.log("This is the urlToImage: ", this.urlToImage);
	}

	getName() {
		console.log("This is the name ", this.name);
	}
}
module.exports = new NewsAPIModel();