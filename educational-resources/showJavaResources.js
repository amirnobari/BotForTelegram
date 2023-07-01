const { Markup } = require('telegraf')

const showJavaResources = (ctx) => {
  ctx.reply('تمام دوره های رایگان جاوا ', Markup.inlineKeyboard([
    [Markup.button.url('آموزش صفر تا صد برنامه نویسی جاوا (فیلم فارسی+ جزوه pdf)', 'https://sariasan.com/java/arrays/java-free-full-lessons/')],
    [Markup.button.url('آموزش رایگان جاوا پیشرفته(مکتب خونه)', 'https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AC%D8%A7%D9%88%D8%A7-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-mk1058/')],
    [Markup.button.url('آموزش رایگان جاوا به زبان ساده (کد یاد)', 'https://codeyad.com/course/2023/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A8%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%D8%B3%D8%A7%D8%AF%D9%87-java')],
    [Markup.button.url('آموزش جاوا برای مبتدیان (زبان انگلیسی,Mosh)', 'https://youtu.be/eIrMbAQSU34')],

  ]))
}

module.exports = {
  showJavaResources: showJavaResources,
}
