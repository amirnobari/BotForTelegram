const { Markup } = require('telegraf');

const showNodeJsResources = ctx => {
  ctx.editMessageText(
    'تمام دوره های رایگان نود جی اس ',
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          'آموزش رایگان Node.js پروژه محور(مکتب خونه)',
          'https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-nodejs-mk1064/'
        ),
      ],
      [
        Markup.button.url(
          'آموزش رایگان و گام به گام نود جی اس(سون لرن)',
          'https://7learn.com/blog/node-js-tutorial'
        ),
      ],
      [
        Markup.button.url(
          'آموزش نود جی اس (Neonlearn) مقدماتی تا پیشرفته 2021',
          'https://youtu.be/hPYRn8feEEw'
        ),
      ],
      [
        Markup.button.url(
          'آموزش نود جی اس برای مبتدیان (زبان انگلیسی,Mosh)',
          'https://youtu.be/TlB_eWDSMt4'
        ),
      ],
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
  showNodeJsResources: showNodeJsResources,
};
