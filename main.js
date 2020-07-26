const {TOKEN, PREFIXS, OWNERS} = require("./infos/config.json");
const Client = require("./classes/Client");
const client = new Client(TOKEN, {prefixes: PREFIXS, owners: OWNERS}, {disableMentions: "all"});
            /* Load Commands */
client.loadCommands();
            /* Load Events */
client.loadEvents();

module.exports = client;
