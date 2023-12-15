const { Markup } = require('telegraf');

const showِDjangoResources = ctx => {
  ctx.editMessageText(
    'تمام دوره های رایگان جانگو',
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          'آموزش رایگان ساخت وبلاگ با جنگو(تاپلرن)',
          'https://toplearn.com/c/pg9N'
        ),
      ],
      [
        Markup.button.url(
          'آموزش رایگان جنگو از صفر تا صد (پی استور)',
          'https://programstore.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AC%D9%86%DA%AF%D9%88-%D8%A7%D8%B2-%D8%B5%D9%81%D8%B1-%D8%AA%D8%A7-%D8%B5%D8%AF/'
        ),
      ],
      [
        Markup.button.url(
          'آموزش جانگو برای مبتدیان (انگلیسی , mosh)',
          'https://youtu.be/rHux0gMZ3Eg'
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
  showِDjangoResources: showِDjangoResources,
};
