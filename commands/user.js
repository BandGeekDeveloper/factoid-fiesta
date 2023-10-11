const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Displays server information')

    async execute(interaction) {
        await interaction.reply(`This server's name is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`)
    }
}