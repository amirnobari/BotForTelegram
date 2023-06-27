const { Markup } = require('telegraf')
const buyModule = require('./buy')
const handleStartCommand = (ctx, bot) => {
  const username = ctx.from.username
  ctx.reply(`Welcome To My Bot Dear, ${username}`, Markup.inlineKeyboard([
    [Markup.button.callback('About Me', 'about_me')],
    [Markup.button.callback('Chat with GPT', 'ENABLE_CHATGPT')],
    [Markup.button.callback('Buy CHATGPT Account', 'buy')],
  ]))
  buyModule(bot)
}

module.exports = {
  handleStartCommand: handleStartCommand
}
