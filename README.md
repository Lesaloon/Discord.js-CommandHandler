### Discord.js Command Handler @12.2.0

To begin, install the dependicies with `npm i`. For run the bot, use `npm run start` or `node ./main.js`
Change informations in `./infos/config.json`

## Commands & Events Templates

# Commands

```js
const Command = require("../classes/Command.js")

module.exports = new Command({
    name: "ping"
}, async(client, message, args) => {
    message.channel.reply(client.ws.ping + "ms")
    // All code goes here
}) 
```
**You must create a file in `commands` directory**

# Events

```js
module.exports = async(client, ...args) => {
    console.log(`Event!`)
};
```
**Warning, the events name is the file name**