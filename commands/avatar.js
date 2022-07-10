module.exports.onmessage = function(message, client) {
    message.channel.send(message.author.avatarURL({extension:'png',size:4096}))
}
