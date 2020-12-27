// Load up the libraries
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

// Discord Bot - Called client in js
const client = new Discord.Client();

// Load Json
const config = require("./config.json");
// config.token & config.prefix
// give the bot the config to be referenced elsewhere
client.config = config;

client.on("ready", () => {
  // ready message
  console.log(`Bot has started in ${client.guilds.cache.size} guilds.`);
  // custom status
  client.user.setActivity(`${config.prefix[0]} test`);
});

//event handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

// command handler
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);