const { Markup } = require('telegraf');

const showRoadMapWebsites = ctx => {
  ctx.editMessageText(
    'وب سـایت هـایی بـرای پیـدا کـردن نقشـه راه بـرای بـرنامـه نـویسـان. 👨🏻‍💻',
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          'سایت(وبسافت3)',
          'https://websoft3.com/web-programming-roadmap/'
        ),
      ],
      [Markup.button.url(' سایت (roadmap) ', 'https://roadmap.sh/')],
      [
        {
          text: 'بازگشت 🔁',
          callback_data: 'back',
        },
      ],
    ])
  );
};

module.exports = {
  showRoadMapWebsites: showRoadMapWebsites,
};
