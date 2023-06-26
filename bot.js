require('dotenv').config();

const { Telegraf, Markup, session } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable session
bot.use(session());

// Handler for the /start command
bot.start((ctx) => {
    const username = ctx.from.first_name;
    ctx.reply(`Welcome To My Bot Dear, ${username}!`, Markup.inlineKeyboard([
        [Markup.button.callback('Ask a Question', '/ask')],
        [Markup.button.callback('About Me', 'about_me')]
    ]));
});

// Middleware for showing the about me message
bot.action('about_me', (ctx) => {
    const linkedinUrl = 'https://www.linkedin.com/in/amir-nobari1990/';
    const githubUrl = 'https://github.com/amirnobari';
    const infoMessage = `
        <b>About Me</b>
        I am a bot developed by Amir Nobari.
        For more information, please visit my LinkedIn profile or
        GitHub profile.
    `;
    ctx.answerCbQuery(infoMessage);
    ctx.replyWithHTML(infoMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'LinkedIn Profile', url: linkedinUrl },
                    { text: 'GitHub Profile', url: githubUrl }
                ]
            ]
        }
    });
});

// Handler for the "Ask a Question" button
bot.action('/ask', (ctx) => {
    const askMessage = 'Please ask your question:';
    ctx.reply(askMessage);

    // Set the state to indicate that the bot is ready to receive the question
    ctx.session.waitingForQuestion = true;
});

// Handler for receiving messages
bot.on('text', async (ctx) => {
    const message = ctx.message.text;

    // Check the type of the message
    if (ctx.session.waitingForQuestion) {
        // The bot is ready to receive the question
        const question = message;

        // Call the ChatGPT API to get a response
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                question: question,
                // Add any additional parameters required by your API
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.API_TOKEN}`,
                    // Add any other required headers
                },
            });

            const answer = response.data.answer;

            ctx.reply(answer);
        } catch (error) {
            console.error(error);
            ctx.reply('Sorry, an error occurred while processing your question.');
        }

        // Reset the state
        ctx.session.waitingForQuestion = false;
    } else {
        if (message === '/cancel') {
            const cancelMessage = 'Operation canceled.';
            ctx.reply(cancelMessage);
        }
    }
});

// Start the bot
bot.launch();
console.log('Bot is running!');
