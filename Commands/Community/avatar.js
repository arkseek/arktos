const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("get the avatar of a user")
    .addUserOption(option =>(
      option.setName('target').setDescription('the pfp of the user you want to fetch').setRequired(true))),
  run: ({ interaction, client, handler }) => {
    const user = interaction.options.getUser('target')

    const embed = new EmbedBuilder()
      .setTitle(`Avatar of ${user.tag}`)
      .setImage(user.avatarURL())

    interaction.reply({ embeds: [embed] });
  },
  options: {},
};
