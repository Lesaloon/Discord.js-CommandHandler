const {getCommand, getPermission, discordEmbed} = require("../config/functions.js");
module.exports = async(client, message) => {
    let commandPrefix;
    for(const prefix of client.prefixes) {
        if(message.content.startsWith(prefix)) {
            commandPrefix = prefix;
            client.prefix = commandPrefix;
        };
    };
    if(!commandPrefix) return;
    let args = message.content.slice(commandPrefix.length).split(/ +/g);
    let command = getCommand(args[0]);
    if(command) {
        command.run(client, message, args)
            .catch((err) => message.channel.send(errorFunction(err)));
    };
};

function errorFunction(err) {
    return discordEmbed({
        description: `
        **Error in command** : 
        \`\`\`js
        ${err}
        \`\`\`  
        **Node Version**: \`${process.version}\`
        **Librairy version**: \`${require("../package.json").dependencies["discord.js"]}\`
        `
    })
    .setColor(client.hexColors.red);
};