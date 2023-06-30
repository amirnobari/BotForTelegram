const { Markup } = require('telegraf')

const handleStartCommand = (ctx) => {
  const username = ctx.from.username
  ctx.reply(`کاربر ${username} به ربات دنیای برنامه نویسی خوش آمدی` , Markup.inlineKeyboard([
    [Markup.button.callback('در مورد سازنده ربات بیشتر بدانید', 'about_me')],
    [Markup.button.callback(' منابع آموزشی برنامه نویسی', 'resources')],
    [Markup.button.callback('وب سایت هایی برای حل خطاها در کد نویسی','error')],
    [Markup.button.callback('مقالات برنامه نویسی', 'articles')],
    [Markup.button.callback('وب سایت هایی برای تمرین و یادگیری برنامه نویسی', 'practice')],
    [Markup.button.callback('وب سایت هایی برای پیدا کردن رود مپ جهت یادگیری برنامه نویسی', 'road_map')],
    [Markup.button.callback('وب سایت هایی برای ساخت رزومه(رایگان)', 'resume')],
    [Markup.button.callback('وب سایت و اپلکیشن هایی جهت پیدا کردن شغل برای برنامه نویسی', 'job')],
  ]))
}

module.exports = {
  handleStartCommand: handleStartCommand,
}
