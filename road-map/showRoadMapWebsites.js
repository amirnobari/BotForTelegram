const { Markup } = require('telegraf');

const showRoadMapWebsites = (ctx) => {
  ctx.reply('وب سایت هایی برای پیدا کردن نقشه راه برای برنامه نویسان', Markup.inlineKeyboard([
    [Markup.button.url('سایت(وبسافت3)', 'https://websoft3.com/web-programming-roadmap/')],
    [Markup.button.url(' سایت (roadmap) ', 'https://roadmap.sh/')],
  ]));
};

module.exports = {
  showRoadMapWebsites: showRoadMapWebsites,
};
