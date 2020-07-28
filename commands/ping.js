const Command = require("../classes/Command.js");
const {discordEmbed} = require("../config/functions.js")
module.exports = new Command({
    name    : "ping",
    aliases : ["pong"]
}, async(client, message, args) => {
    message.channel.send(discordEmbed({description: `Pong! ${client.ws.ping}ms`}));
});