const { Markup } = require('telegraf');

const showChanelResources = (ctx) => {
  ctx.reply('کانال و گروه های مرتبط به برنامه نویسی', Markup.inlineKeyboard([
    [Markup.button.url('کانال دورهمی برنامه نویسان', 'https://t.me/irdev2')],
    [Markup.button.url('کانال (Tech Immigrants)', 'https://t.me/techimmigrants')],
    [Markup.button.url('کانال (Hangouts to Learn)', 'https://t.me/hangouts_tolearn')],
    
  ]));
};

module.exports = {
  showChanelResources: showChanelResources,
};
