const { Markup } = require('telegraf');

const showPracticeWebsites = ctx => {
  ctx.editMessageText(
    'وب سـایت هـایی بـرای یـادگـیری و تـمریـن آنـلایـن بـرنامـه نـویسـی. 👽',
    Markup.inlineKeyboard([
      [Markup.button.url('سایت w3schools', 'https://www.w3schools.com/')],
      [Markup.button.url('سایت Codecademy', 'https://www.codecademy.com/')],
      [
        Markup.button.url('سایت devdocd', 'https://devdocs.io/'),
        {
          text: 'بازگشت 🔁',
          callback_data: 'back',
        },
      ],
    ])
  );
};

module.exports = {
  showPracticeWebsites: showPracticeWebsites,
};
