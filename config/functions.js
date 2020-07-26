const client = require("../main.js")
/**
 * @function getPermission - Get if user has permission
 * @param {*} user - Permission target
 * @param {*} permission - Permission required
 * @param {*} message - Permission message
 */
export function getPermission(user, permission, message) {
    return message.member(user).hasPermission(permission) || false;
};
/**
 * @function isOwner - Get if user is in owner's list
 * @param {*} id - The id of the targeted user
 */
export function isOwner(id) {
    return client.OWNERS.includes(id) || false;
};
/**
 * @function getCommand - Get a client command
 * @param {*} nameOrAlias - The name or the alias of the targeted command
 */
export function getCommand(nameOrAlias) {
    return client.commands.find((c) => c.name === nameOrAlias) || client.commands.find((c) => c.aliases !== undefined && c.aliases.includes(name)) || false;
};
