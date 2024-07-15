const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "lock",
    description: "[⭐] Tranque um canal",

    run: async (interaction) => {
        if (!interaction.member.permissions.has("Administrator")) {
            interaction.reply({ ephemeral: true, content: '**Voce não tem permissão suficiente!**' });
            return;
        }
        const embed = new EmbedBuilder()
        .setTitle("Trancado")
        .setDescription(`> **🔴 O canal **${interaction.channel.name}** foi trancado!**\nAdmin: ${interaction.user}`)
        .setFooter({ text: `Copyright © João`, iconURL: `${interaction.user.displayAvatarURL()}`})
        .setTimestamp()

        const canal = interaction.channel;
        canal.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false, ViewChannel: true}).catch( o => {
            console.log(o)
            interaction.reply({ content: "Error"})
        })

        interaction.reply({ ephemeral: true, embeds: [embed]})
    }
}