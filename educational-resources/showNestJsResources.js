const { Markup } = require('telegraf');

const showِNestJsResources = (ctx) => {
  ctx.reply('تمام دوره های رایگان نست جی اس', Markup.inlineKeyboard([
    [Markup.button.url('آموزش پروژه محور نست جی اس (امیر نجفی)', 'https://youtu.be/UtDeBDARHYc')],
    [Markup.button.url('آمورش مقدماتی نست جی اس (انگلیسی,freecodecammp)', 'https://youtu.be/GHTA143_b-s')],
    [Markup.button.url('دوره اموزش NestJS(کثیر براتی)' ,'https://www.aparat.com/v/PjeQw?playlist=1113222')],
  ]));
};



module.exports = {
  showِNestJsResources: showِNestJsResources,
};
