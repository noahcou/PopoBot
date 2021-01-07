module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // check if they are doing a command
  if (preftrue(client.config.prefix, message, true)) {
    pref = preftrue(client.config.prefix, message, false)
    const args = message.content.slice(pref.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // don't crash if don't exist
    if (!cmd) {
      client.commands.get("null").run(client, message, args)
      return;
    } else {
      // Run the command
      cmd.run(client, message, args);
      return;
    }
  }

  // check if message contains certain things before passing it forward (sorry stuff like that)
  // when someone says sorry
  if (message.content.toLowerCase().indexOf("sorry") != -1) {
    console.log("They said sorry!")
    message.channel.send("Damn right you are")
    return;
  }

  // when someone says popo
  if (message.content.toLowerCase().indexOf("Popo") != -1) {
    console.log("They said Popo")
    rand = Math.floor(Math.random() * 100)
    chance = 35
    if (rand < chance) {
      message.channel.send("POOOOOOOOOOPOOOOOOOOOOO!!!")
    }
    return;
  }

  // trigger random events
  // small chance to tell people to shut up in general
  if (message.channel.id == "792293253512036355") {
    rand = Math.floor(Math.random() * 100)
    chance = 2
    if (rand < chance) {
      console.log("Telling them to shut up")
      message.channel.send("Shut Up Maggot!")
    }
    return;
  }

  if ((message.author.id == "325769856047775755" || message.author.id == "353687311449325569") && message.content.indexOf("?") != -1) {
    console.log("Woman asked question")
    message.channel.send("Oh look, a woman who doesn't know any better. What are the odds?")
  }


  //update status becasue it keeps turning off
  client.user.setActivity(`${client.config.prefix[0]} help`);
};

function preftrue(prefix, message, check) {
  for (x = 0; x < prefix.length; x++) {
    if (message.content.toLowerCase().indexOf(prefix[x]) == 0) {
      if (check) {
        return true; 
      } else {
        return prefix[x]
      }
    }
  }
  return false;
}