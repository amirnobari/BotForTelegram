const { Markup } = require('telegraf');

const showPracticeWebsites = (ctx) => {
  ctx.reply('وب سایت هایی برای یادگیری و تمرین آنلاین', Markup.inlineKeyboard([
    [Markup.button.url('سایت w3schools', 'https://www.w3schools.com/')],
    [Markup.button.url('سایت Codecademy', 'https://www.codecademy.com/')],
    [Markup.button.url('سایت devdocd', 'https://devdocs.io/')],
  ]));
};

module.exports = {
  showPracticeWebsites: showPracticeWebsites,
};
