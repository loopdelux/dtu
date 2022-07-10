const Discord = require("discord.js")

const config = require("./config.json");

const client = new Discord.Client({
    // https://discord.com/developers/docs/topics/gateway#list-of-intents
    intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]   
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(`you.`, {
        type: "WATCHING",
      });
})

client.on("message", (msg) => {

    if(msg.author.bot) return;

    if(msg.content === "penisballs") {
        msg.reply("I'm just not feeling it anymore, bro.");
    }

    if(["balls", "Balls"].includes(msg.content)) {
        msg.reply("Soon enough I'll cut off your sack.")
    }

    console.log(msg)
})

client.login(config.token)