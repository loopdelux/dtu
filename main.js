const Discord = require("discord.js");

const config = require("./config.json");

const client = new Discord.Client({
  // https://discord.com/developers/docs/topics/gateway#list-of-intents
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});

// Command Handler ---------------------
const fs = require("fs");
const commands = [];

client.on("ready", () =>
  fs
    .readdirSync("./commands")
    .forEach((command) => commands.push(command.split(".js")[0]))
);

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0].slice(1);

  if (commands.includes(command)) {
    require(`./commands/${command}.js`).onmessage(message, client);
  }
});
//--------------------------------------

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`you.`, {
    type: "WATCHING",
  });
});

client.login(config.token);
