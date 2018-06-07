const Discord = require("discord.js");
const unirest = require("unirest");



module.exports.run = async (bot, message, args) => {
// 	let embed = new Discord.RichEmbed()
// 		.setAuthor(message.author.username)
// 		.setDescription("This is the user's info!")
// 		.setColor("#9B59B6")
// 		.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
// 		.addField("ID", message.author.id)
// 		.addField("Created At", message.author.createdAt);

// 	message.channel.send(embed);

// 	return;
		
// }

// module.exports.help = {
// 	name: "userInfo"
// }

	var request = unirest.get("https://api.feedbin.com/v2/authentication.json").end(function (res) {
		console.log(request.body)
	});
	// request.auth('thomas.j.marler@gmail.com', '!!TTommy3531', true).end(function (response) {
	// 	console.log(response.body)
	// });
}

module.exports.help = {
	name: "rss"
}