const { Markup } = require('telegraf');

const showPythonResources = (ctx) => {
  ctx.reply('تمام دوره‌های رایگان پایتون:', Markup.inlineKeyboard([
    [Markup.button.url('آموزش رایگان پایتون (کدیاد)', 'https://codeyad.com/Course/2003/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-%D8%AA%D8%A7-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-(python)')],
    [Markup.button.url('دوره رایگان آموزش پایتون (تاپ لرن)', 'https://toplearn.com/c/o2V3')],
    [Markup.button.url('آموزش پایتون مقدماتی(مکتب خونه)', 'https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-mk674/')],
  ]));
};



module.exports = {
  showPythonResources: showPythonResources,
};
