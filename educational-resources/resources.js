const { Markup } = require('telegraf');

const showResources = (ctx) => {
  ctx.reply('دوره ها', Markup.inlineKeyboard([
    [Markup.button.callback('پایتون', 'python')],
    [Markup.button.callback('جاوا اسکریپت', 'javascript')],
    [Markup.button.callback('الگوریتم', 'algorithm')],
  ]));
};

module.exports = {
  showResources: showResources,
};
