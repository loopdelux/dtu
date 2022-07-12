const { MessageEmbed } = require('discord.js');

module.exports.onmessage = function(message, client) {
    // Legacy:
    // message.channel.send(message.author.displayAvatarURL({dynamic : true, size : 4096}));

    const avatar = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle(message.author.username + "'s avatar")
        .setImage(message.author.displayAvatarURL({dynamic : true, size : 4096}));

    message.channel.send({embeds : [avatar]});
}
