const client = require("../main.js")
const {MessageEmbed} = require("discord.js")
const moment = require("moment")
/**
 * @function getPermission - Get if user has permission
 * @param {object} user - Permission target
 * @param {string} permission - Permission required
 * @param {object} message - Permission message
 */
exports.getPermission = function(user, permission, message) {
    return message.guild ? message.guild.member(user).hasPermission(permission) || false : false
};
/**
 * @function isOwner - Get if user is in owner's list
 * @param {number} id - The id of the targeted user
 */
exports.isOwner = function(id) {
    return client.OWNERS.includes(id) || false;
};
/**
 * @function getCommand - Get a client command
 * @param {string} nameOrAlias - The name or the alias of the targeted command
 */
exports.getCommand = function(nameOrAlias) {
    return client.commands.find((c) => c.name === nameOrAlias) || client.commands.find((c) => c.aliases !== undefined && c.aliases.includes(nameOrAlias)) || false;
};
/**
 * @function discordEmbed - Create a discord embed
 * @param {object} props - Line of embed
 */
exports.discordEmbed = function(props) {
    let e = new MessageEmbed();
    e.setFooter(`${client.user.tag} | ${moment().locale("fr").format('lll')}`)
    e.setColor(client.embedsColors)
    props.author ? e.setAuthor(props.author) : false;
    props.title ? e.setTitle(props.title) : false;
    props.description ? e.setDescription(props.description) : false;
    props.image ? e.setImage(props.image) : false;
    return e;
};