const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('timeout a user')
        .addUserOption(option =>(
            option.setName('target').setDescription('the user you want to timeout').setRequired(true)
        ))
        .addStringOption(option => (
            option.setName('minutes').setDescription('the amount of minutes you want the user muted').setRequired(true)
        ))
        .addStringOption(option => (
            option.setName('reason').setDescription('the reason for the timeout.').setRequired(false)
        ))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    run: ({ interaction, client, handler}) => {
        const target = interaction.options.getMember('target')
        const reasoning = interaction.options.getString('reason') ?? 'no reason was provided.'
        const time = interaction.options.getString('minutes')
        const minutes = parseInt(time) * 60

        const embed = new EmbedBuilder()
            .setTitle(`Timed-out ${target.tag}`)
            .setDescription(`${interaction.user.username} Muted \*\*\*${target}\*\*\* \n Time: \`\`\`${time} minutes.\`\`\` \n Reason: \`\`\`${reasoning}\`\`\``)
            .setColor("#df2935")
            .setTimestamp()
        
        interaction.reply({ embeds: [embed], ephemeral: true })
        target.timeout(minutes)
    },
    option: {
    }
}