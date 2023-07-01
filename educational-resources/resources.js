const { Markup } = require('telegraf');

const showResources = (ctx) => {
  ctx.reply('دوره ها', Markup.inlineKeyboard([
    [Markup.button.callback('پایتون', 'python')],
    [Markup.button.callback('جاوا اسکریپت', 'javascript')],
    [Markup.button.callback('نود جی اس', 'Node.js')],
    [Markup.button.callback('جانگو', 'Django')],
    [Markup.button.callback('ری اکت', 'React')],
    [Markup.button.callback('جاوا', 'Java')],
    [Markup.button.callback('نست جی اس', 'Nest.js')],
    [Markup.button.callback('داکر', 'Docker')],
    [Markup.button.callback('مونگو دی بی', 'MongoDB')],
    [Markup.button.callback('الگوریتم', 'algorithm')],
  ]));
};

module.exports = {
  showResources: showResources,
};
