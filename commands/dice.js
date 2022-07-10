module.exports.onmessage = function(message, client) {
    message.channel.send(Math.floor(Math.random() * 7))
}