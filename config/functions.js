const client = require("../main.js")
/**
 * @function getPermission - Get if user has permission
 * @param {*} user - Permission target
 * @param {*} permission - Permission required
 * @param {*} message - Permission message
 */
exports.getPermission = function(user, permission, message) {
    return message.member(user).hasPermission(permission) || false;
};
/**
 * @function isOwner - Get if user is in owner's list
 * @param {*} id - The id of the targeted user
 */
exports.isOwner = function(id) {
    return client.OWNERS.includes(id) || false;
};
/**
 * @function getCommand - Get a client command
 * @param {*} nameOrAlias - The name or the alias of the targeted command
 */
exports.getCommand = function(nameOrAlias) {
    return client.commands.find((c) => c.name === nameOrAlias) || client.commands.find((c) => c.aliases !== undefined && c.aliases.includes(name)) || false;
};