// Import discord.js and dotenv
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Retrieve the API key from the .env file
const apiKey = process.env.DISCORD_API_KEY;

// Log the API key to the console
console.log(`Your API key is: ${apiKey}`);

// Check if the API key exists before proceeding
if (!apiKey) {
    console.error('Error: DISCORD_API_KEY is not defined in the .env file.');
    process.exit(1); // Exit the application if the key is missing
}

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

// Event: When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event: When the bot receives a message
client.on('messageCreate', (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Respond to specific content
    if (message.content.toLowerCase() === 'hello') {
        message.reply('Hello! How can I assist you today?');
    } else if (message.content.toLowerCase().includes('help')) {
        message.reply('Sure! I can help you. Please tell me more about what you need.');
    } else {
        message.reply("I'm not sure how to respond to that, but I'm learning!");
    }
});

// Log in to Discord using the API key
client.login(apiKey);
