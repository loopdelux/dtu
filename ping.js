module.exports.name = "ping";

module.exports.onmessage = function(message, client) {
    message.channel.send("pong");
}