const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({
    // https://discord.com/developers/docs/topics/gateway#list-of-intents
    intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]   
})

// Command Handler ---------------------
const fs = require('fs')
let commands = {}

client.on('ready', () => fs.readdirSync('./commands').forEach(command => commands[command.split(".js")[0]] = command))

client.on('message', async message => {
    let command = message.content.split(' ')[0]

    if(commands[command]) {
        require(`./commands/${commands[command]}`).onmessage(message, client)
    }
})
//--------------------------------------

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(`you.`, {
        type: "WATCHING",
      })
})

// Just testing out discord.js
client.on("message", (msg) => {

    /* In case I ever re-add my message handler
    if(msg.author.bot) {
        return
    }
    */

    console.log(msg)
})

client.login(config.token)