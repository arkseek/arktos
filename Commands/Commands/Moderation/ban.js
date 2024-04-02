const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban a user')
        .addUserOption(option =>(
            option.setName('target').setDescription('the user you want to ban').setRequired(true)
        ))
        .addStringOption(option => (
            option.setName('reason').setDescription('the reason for the ban.')
        ))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    run: ({ interaction, client, handler}) => {
        const target = interaction.options.getUser('target')
        const reasoning = interaction.options.getString('reason') ?? 'no reason was provided.'

        const embed = new EmbedBuilder()
            .setTitle(`Banned ${target}`)
            .setDescription(`${interaction.user.username} banned \*\*\*${target}\*\*\* \n Reason: \`\`\`${reasoning}\`\`\``)
            .setColor("#df2935")
            .setTimestamp()
        
        interaction.reply({ embeds: [embed] })
        interaction.guild.members.ban(target)
    },
    option: {
        userPermissions: ['Administrator', 'BanMembers'],
        botPermissions: ['Administrator', 'BanMembers']
    }
}