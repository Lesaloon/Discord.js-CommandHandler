const {Client, Collection} = require("discord.js");
const {readdir} = require("fs").promises;
const {EMBEDS} = require("../config/colors.js")
const {magenta, blueBright, blue, red} = require("chalk")
/**
 * @extends CoolClient - An advenced discord client
 * @constructor - The client token and the client options
 * @function loadCommands - Load the client commands
 */

module.exports = class CoolClient extends Client {
    constructor(TOKEN, PROPS, OPTIONS) {
        super(OPTIONS); // Bot's Options
            this.login(TOKEN)
                .then(console.log(blue(`Discord Client is connecting`)))
                .catch((err) => console.log(`Error: ${err}`));
            this.commands = new Collection();
            this.embedsColors = EMBEDS;
            this.prefixes = PROPS.prefixes;
            this.owners = PROPS.owners
    };
    loadCommands() {
        readdir("./commands/").then((files) => {
            console.log(magenta(`Commands (${files.length}) ready to use`))
            for(const file of files) {
                if(!file.endsWith('.js')) return console.log(red(`Sorry, here existing a not JavaScript file: ${file}`));
                const command = require(`../commands/${file}`);
                this.commands.set(command.name, command);
            };
        });
    };
    loadEvents() {
        readdir("./events/").then((files) => {
            console.log(blueBright(`Events (${files.length}) ready to use`))
            for(const file of files) {
                if(!file.endsWith('.js')) return console.log(red(`Sorry, here existing a not JavaScript file: ${file}`));
                const event = require(`../events/${file}`);
                const eventName = file.split('.')[0];
                this.on(eventName, event.bind(null, this));
            };
        });
    };
};