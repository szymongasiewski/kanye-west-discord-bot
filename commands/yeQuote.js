const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

const getQuote = async () => {
	try {
		const { data: response } = await axios.get('https://api.kanye.rest/text');
		return response;
	}
	catch (error) {
		console.log(error);
	}
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yequote')
		.setDescription('Random Kanye West Quote.'),
	async execute(interaction) {
		await interaction.reply(await getQuote());
	},
};