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
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
client.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
	if (err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands load!");
		return;
	}


	console.log('Loading' + " " + jsfiles.length + " " + "commands" );

});

client.on("ready", () => {
  console.log(client.user.username + " " + "Is ready!!!");
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
client.login("NDUxNTc0ODQzMzg1NzA4NTU0.DfD-cw.S0pt-Dhbs4p1SiLmpi3MRjH9O3U");