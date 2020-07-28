const {redBright} = require("chalk")
const moment = require("moment")
module.exports = async(client) => {
    console.log(redBright(`Ready in ${client.users.cache.size} users & ${client.guilds.cache.size} guilds`));
    client.prefixes.push(`<@${client.user.id}>`)
    moment.locale("fr")
};