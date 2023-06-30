const { Markup } = require('telegraf')

const showErrorHandlerWebsites = (ctx) => {
  ctx.reply('وب سایت هایی برای حل خطاها در کد نویسی', Markup.inlineKeyboard([
    [Markup.button.url('وب سایت (stackoverflow)', 'https://stackoverflow.com/')],
    [Markup.button.url('وب سایت (Github)', 'https://github.com/')],
  ]))
}



module.exports = {
  showErrorHandlerWebsites: showErrorHandlerWebsites,
}
