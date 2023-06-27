const { Telegraf, Markup, session } = require('telegraf')
const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const configuration = new Configuration({
  organization: "org-y0vIHonZMz14MkjwPTUH55wD",
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

// Enable session
bot.use(session())

// Handler for the /start command
bot.start((ctx) => {
  const username = ctx.from.username
  ctx.reply(`Welcome To My Bot Dear, ${username}!`, Markup.inlineKeyboard([
    [Markup.button.callback('About Me', 'about_me')],
  ]))
})

// Middleware for showing the about me message
bot.action('about_me', (ctx) => {
  const linkedinUrl = 'https://www.linkedin.com/in/amir-nobari1990/'
  const githubUrl = 'https://github.com/amirnobari'
  const infoMessage = `
    <b>About Me</b>
    I am a bot developed by Amir Nobari.
    For more information, please visit my LinkedIn profile or
    GitHub profile.
  `
  ctx.answerCbQuery(infoMessage)
  ctx.replyWithHTML(infoMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'LinkedIn Profile', url: linkedinUrl },
          { text: 'GitHub Profile', url: githubUrl },
        ],
      ],
    },
  })
})

// Handler for receiving messages
bot.on("message", async (ctx) => {
  const question = ctx.message.text

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 1000,
      temperature: 0.7,
    }).then(response => {
      ctx.reply(response.data.choices[0].text)
    }).catch(err => {
      console.log(err)
    })
  } catch (error) {
    console.error(error)
    ctx.reply('Sorry, an error occurred while processing your question.')
  }
})

bot.launch()
console.log('Bot is running!')
