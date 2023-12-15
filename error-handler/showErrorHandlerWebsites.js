const { Markup } = require('telegraf');

const showErrorHandlerWebsites = ctx => {
  ctx.editMessageText(
    'وب سـایت هـایی که با اسـتفـاده از آنـها، میـتونـید مشـکلات کدهـایـتان را بـرطـرف کنـید. 🦠',
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          'وب سایت (stackoverflow)',
          'https://stackoverflow.com/'
        ),
      ],
      [Markup.button.url('وب سایت (Github)', 'https://github.com/')],
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
  showErrorHandlerWebsites: showErrorHandlerWebsites,
};
