/**
 * @class
 * @constructor - The Command props as name, description, settings...; The Command Run is to run code
 */
module.exports = class Command {
    constructor(props, run) {
        this.name = props.name;
        this.run = run;
        if(props.description) this.description = props.description;
        if(props.usage) this.usage = props.usage;
        if(props.aliases) this.aliases = props.aliases;
        if(props.category) this.category = props.category;
        if(props.nsfw === true) this.nswfCommand = true;
        if(props.ownerOnly === true) this.ownerOnly = true;
        if(props.guildOnly === true) this.guildOnly = true;
        if(props.clientPermission) this.clientPermission = props.clientPermission;
        if(props.userPermission) this.userPermission = props.userPermission;
    };
};