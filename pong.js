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
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }

  if (message.content.startsWith("Tom")) {
  	message.channel.send("Your Awesome!!!");
  }

  // Returns @iOSTom
  if (message.content == 'userInfo') {
  	message.channel.send(message.author.username);
	message.channel.send(message.author.id);

  }
});

client.login("NDUxNTc0ODQzMzg1NzA4NTU0.DfD-cw.S0pt-Dhbs4p1SiLmpi3MRjH9O3U");