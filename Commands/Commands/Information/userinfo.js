const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("get the info of a user")
    .addUserOption(option =>(
      option.setName('target').setDescription('the info of the user you want to fetch').setRequired(true))),
  run: ({ interaction, client, handler }) => {
    const user = interaction.options.getUser('target')

    const embed = new EmbedBuilder()
      .setTitle(`Information of ${user.username}`)
      .setDescription(` \*\*ID\*\*: ${user.id} \n \*\*Profile\*\*: ${user.avatarURL()} \n \*\*Banner\*\*: ${user.banner()} \n `)
      .setAuthor()
    interaction.reply({ embeds: [embed] });
  },
  options: {},
};
