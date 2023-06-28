
const { Telegraf } = require('telegraf');
const { enableSession, isChatGptEnabled } = require('./config');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const startHandler = require('./startHandler');

require('./buy')(bot);

const aboutMe = require('./aboutMe');
const gptConversation = require('./gptConversation');
const handleMessage = require('./messageHandler');

// Enable session
enableSession(bot);

// Register start command handler from startHandler.js
bot.start((ctx) => startHandler.handleStartCommand(ctx, bot));

// Middleware for showing the about me message
bot.action('about_me', aboutMe.showAboutMe);

// Handler for enabling chat with GPT
bot.action('ENABLE_CHATGPT', (ctx) => {
  handleMessage.enableChatGPT(ctx);
});

// Handler for receiving messages
bot.on('message', (ctx) => handleMessage.handleMessage(ctx, isChatGptEnabled));

bot.launch();
console.log('Bot is running!');
