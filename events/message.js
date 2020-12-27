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
    if (!cmd) return;
    // Run the command
    cmd.run(client, message, args);
    console.log("asdf")
    return;
  }

  // check if message contains certain things before passing it forward (sorry stuff like that)

  // trigger random events

  //update status becasue it keeps turning off
  client.user.setActivity(`${client.config.prefix[0]} help`);
};

function preftrue(prefix, message, check) {
  for (x = 0; x < prefix.length; x++) {
    if (message.content.indexOf(prefix[x]) == 0){
      if (check) {
        return true; 
      } else {
        return prefix[x]
      }
    }
  }
  return false;
}