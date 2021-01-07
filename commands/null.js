exports.run = (client, message, args) => {
    console.log("Someone tried to execute an invalid command")
    // get all roles
    roles = message.guild.roles.cache.array()
    roleTec = roles[3]
    roleAdm1 = roles[1]
    roleAdm2 = roles[5]
    roleDM = roles[2]
    roleMag = roles[4]
    roles = [roleMag, roleTec, roleDM, roleAdm1, roleAdm2]
    userRole = message.member.roles.cache.array()[0]
    console.log(roles)
    console.log(userRole)

    if (userRole == roleTec) {
        message.channel.send("You didn't program me to do that dumb ass")
    } else if (userRole == roleMag) {
        options = ["Kami. The Fuck am I doing?", "Bitch you're lucky you're endearing."]
        message.channel.send(options[Math.floor(Math.random() * options.length)])
    } else {
        options = ["BITCH DON'T TELL ME WHAT TO DO!!!!!", "Makin' Toast.\nButterin' Toast."]
        message.channel.send(options[Math.floor(Math.random() * options.length)])
    }
}