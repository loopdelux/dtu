module.exports.onmessage = function(message, client) {
    message.channel.send("You rolled a: " + Math.floor(Math.random() * 6 + 1))
}