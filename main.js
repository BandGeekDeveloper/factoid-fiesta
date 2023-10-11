const fs = require('fs');
const path = require('path')

// Discord Classes
const {Client, Collection, Events, GatewayIntentBits} = require('discord.js');
//Grab token from config file
const {token} = require('./config.json');

//Create new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection;

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    // New item in the collection with the key as the command name and the value is the exported module
    if ('data' in command && 'execute' in command){
        client.commands.set(command.data.name, command)
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
    }
}

client.on(Events.InteractionCreate, interaction => {
    console.log(interaction)
})

client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction)
})

// run this when the client is ready
// C is the event parameter
client.once(Events.ClientReady, c => {
    // lets us know it is connected
    console.log(`Ready! Logged in as ${c.user.tag}`);
})

//Login into discord with token
client.login(token);

