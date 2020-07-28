const {token, prefixs, owners} = require("./infos/config.json");
const Client = require("./classes/Client");
const client = new Client(token, {prefixes: prefixs, owners: owners}, {disableMentions: "all"});
            /* Load Commands */
client.loadCommands();
            /* Load Events */
client.loadEvents();

module.exports = client;