exports.run = (client, message, args) => {
    console.log("Someone tried to execute a command")
    roles = message.guild.roles
    console.log(roles.cache)
}