const { Markup } = require('telegraf');

const showChanelResources = ctx => {
  ctx.editMessageText(
    'کانـال و گـروه های مرتـبط با بـرنـامه نویسـی. 🌐',
    Markup.inlineKeyboard([
      [Markup.button.url('کانال دورهمی برنامه نویسان', 'https://t.me/irdev2')],
      [
        Markup.button.url(
          'کانال (Tech Immigrants)',
          'https://t.me/techimmigrants'
        ),
      ],
      [
        Markup.button.url(
          'کانال (js_challenges)',
          'https://t.me/js_challenges'
        ),
      ],
      [Markup.button.url('کانال (CleverDevs)', 'https://t.me/CleverDevs')],
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
  showChanelResources: showChanelResources,
};
