const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Discord Test Command')

    async execute(interaction){
        await interaction.reply('pong');
    }

}