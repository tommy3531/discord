const Discord = require("discord.js");
const unirest = require("unirest");



module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage message");

	let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!toMute) return message.channel.send("You did not specify a user mention or ID!");
	// return message.reply(toMute.username || toMute.user.username);
	let role = message.guild.roles.find("name", "AdminMuted");

	if(!role) {
		try {
			role = await message.guild.createRole({
				name: "AdminMuted",
				color: "#000000",
				permissions: []
			});

			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(role, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
				});
			});
		} catch(e) {
			console.log(e.stack);
		}
	}
	// toMute.addRole(role);
	// console.log("Role Added");

}

module.exports.help = {
	name: "mute"
}