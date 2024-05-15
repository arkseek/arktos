const { SlashCommandBuilder, EmbedBuilder, Component, Embed } = require('discord.js')
const IsInvitation = require('is-discord-invite')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite-checker')
    .setDescription('check invite')
    .addStringOption(option=>(
        option.setName('invite-url').setDescription('the invite code to check it MUST INCLUSE HTTPS://DISCORD.GG/').setRequired(true)
    )),
    run: ({ interaction, client, handler }) => {
        const invite = interaction.options.getString('invite-url')
        const result = IsInvitation.regex(`${invite}`, {everything: true})

        const resultEmbed = new EmbedBuilder()
        .setTitle(`Invite Check`)
        .setDescription(`The invite URL \*\*${invite}\*\* is indeed: \n \`\`\`${result}\`\`\``)
        .setTimestamp()

        interaction.reply({ embeds: [resultEmbed] });
    },
    options: {
        
    },
}
