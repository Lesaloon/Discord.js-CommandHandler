const Command = require("../classes/Command.js")

module.exports = new Command({
    name: "ping"
}, async(client, message, args) => {
    console.time("Pong!")
}) 