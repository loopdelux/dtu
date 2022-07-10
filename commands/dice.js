module.exports.onmessage = function(message, client) {
    const nums = ["one", "two", "three", "four", "five", "six"]
    message.channel.send(":game_die: :" + nums[Math.floor(Math.random() * 6)] + ":")
}
