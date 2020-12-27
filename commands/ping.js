exports.run = (client, message, args) => {
    console.log("pinged")
    message.channel.send(`Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`).catch(console.error);
}