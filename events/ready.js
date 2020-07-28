const {redBright} = require("chalk")
module.exports = async(client) => {
    console.log(redBright(`Ready in ${client.users.cache.size} users & ${client.guilds.cache.size} guilds`));
    client.prefixes.push(`<@${client.user.id}>`)
};