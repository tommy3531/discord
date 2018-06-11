const mongoose = require('mongoose');
const propublica = require('../API/propublica');

module.exports.run = async (bot, message, args) => {


	var restCall = propublica.propublicaAPI();
	console.log(restCall);

}