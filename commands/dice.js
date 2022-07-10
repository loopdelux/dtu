module.exports.onmessage = function(message, client) {
    message.channel.send("Your rolled a:" + Math.floor(Math.random() * 6) + 1)
}