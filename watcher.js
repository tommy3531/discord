// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const app            = express();
// const port = 8000;
// app.use(bodyParser.urlencoded({ extended: true }));
// // Connection URL
// var url = 'mongodb://tom:!Tommy3531@ds121599.mlab.com:21599/rails_political_data';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, database) {
// 	var railsDB = database.db('rails_political_data');
// 	var politicanCollection = railsDB.collection('politican');
// 	console.log(politicanCollection);
// });
const Discord = require("discord.js");
const botsettings = require("./botsettings.json")
const prefix = botsettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const endpoint = 'https://api.github.com/users'
bot.commands = new Discord.Collection();

(async function main () {

	fs.readdir("./cmds/", (err, files) => {
		if (err) console.error(err);

		let jsfiles = files.filter(f => f.split(".").pop() === "js");
		if(jsfiles.length <= 0) {
			console.log("No commands load!");
			return;
		}
		console.log('Loading' + " " + jsfiles.length + " " + "commands" );

		jsfiles.forEach((f, i) => {
			let props = require(`./cmds/${f}`);
			console.log(`${f} loaded!`);
			bot.commands.set(props.help.name, props);
		});
	});

	bot.on("ready", async () => {
	  console.log(bot.user.username + " " + "Is ready!!!");

	});
	bot.on("message", (message) => {
		if(message.author.bot) return;

		let messageArray = message.content.split(" ");
		let cmd = messageArray[0];
		let args = messageArray.slice(1);

		let commandfile = bot.commands.get(cmd.slice(prefix.length));
		if(commandfile) commandfile.run(bot,message,args);
	});
	bot.login(botsettings.token);

})();

















