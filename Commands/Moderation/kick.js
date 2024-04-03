const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kick a user')
        .addUserOption(option =>(
            option.setName('target').setDescription('the user you want to kick').setRequired(true)
        ))
        .addStringOption(option => (
            option.setName('reason').setDescription('the reason for the kick.').setRequired(false)
        ))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    run: ({ interaction, client, handler}) => {
        const target = interaction.options.getUser('target')
        const reasoning = interaction.options.getString('reason') ?? 'no reason was provided.'

        const embed = new EmbedBuilder()
            .setTitle(`Kicked ${target}`)
            .setDescription(`${interaction.user.username} Kicked \*\*\*${target}\*\*\* \n Reason: \`\`\`${reasoning}\`\`\``)
            .setColor("#df2935")
            .setTimestamp()
        
        interaction.reply({ embeds: [embed], ephemeral: true })
        interaction.guild.members.kick(target)
    },
    option: {
    }
}