const { Markup } = require('telegraf');

const showReactResources = (ctx) => {
  ctx.reply('تمام دوره های رایگان ری اکت', Markup.inlineKeyboard([
    [Markup.button.url('آموزش ReactJs ورژن 16 (ری اکت آپ)', 'https://reactapp.ir/courses/%D8%AF%D9%88%D8%B1%D9%87-%D9%87%D8%A7%DB%8C-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-reactjs-%D9%88%D8%B1%DA%98%D9%86-16/')],
    [Markup.button.url('مقذماتی و پیشرفته پروژه محور (neonlearn)', 'https://youtu.be/HVifx7Sy6UA')],
    [Markup.button.url('آموزش ری اکت برای مبتدیان (انگلیسی,freecodecamp)', 'https://youtu.be/bMknfKXIFA8')],
  ]));
};



module.exports = {
  showReactResources: showReactResources,
};
