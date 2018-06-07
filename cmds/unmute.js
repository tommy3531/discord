const Discord = require("discord.js");
const unirest = require("unirest");



module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage message");

	let toMute = message.mentions.users.first() || message.guild.members.get(args[0]);
	if(!toMute) return message.channel.send("You did not specify a user mention or ID!");
	// return message.reply(toMute.username || toMute.user.username);
	let role = message.guild.roles.find(r => r.name === "Muted");

	if(!role || toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");
	
	await toMute.removeRole(role);
	message.channel.send("I have unmuted them.");
	return

}

module.exports.help = {
	name: "unmute"
}