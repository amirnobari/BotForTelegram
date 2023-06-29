const { Markup } = require('telegraf')

const handleStartCommand = (ctx) => {
  const username = ctx.from.username
  ctx.reply(`Welcome To My Bot Dear, ${username}`, Markup.inlineKeyboard([
    [Markup.button.callback('در مورد سازنده ربات بیشتر بدانید', 'about_me')],
    [Markup.button.callback(' منابع آموزشی برنامه نویسی', 'resources')],
  ]))
}

module.exports = {
  handleStartCommand: handleStartCommand,
}
