const {Client, Collection} = require("discord.js");
const {readdir} = require("fs").promises;
const {embeds, hexCode} = require("../config/colors.js")
const {magenta, blueBright, blue, red} = require("chalk")
/**
 * @extends CoolClient - An advenced discord client
 * @constructor - The client token and the client option
 * @method loadCommands - Load the client commands
 * @method loadEvents - Load the client events
 */

module.exports = class CoolClient extends Client {
    constructor(token, props, option) {
        super(option); // Bot's option
            this.login(token)
                .then(console.log(blue(`Discord Client is connecting`)))
                .catch(console.error);
            this.commands = new Collection();
            this.embedsColors = embeds;
            this.hexCodes = hexCode;
            this.prefixes = props.prefixes;
            this.prefix = undefined;
            this.owners = props.owners;
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