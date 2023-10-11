const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Shows user information')

    async execute(interaction) {
        //interaction.user is the object that is the user
        //interaction.member is the specific user in the guild
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`)
    }
}