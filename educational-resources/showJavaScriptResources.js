const { Markup } = require('telegraf')

const showJavaScriptResources = (ctx) => {
  ctx.reply('تمام دوره های رایگان جاوا اسکریپت', Markup.inlineKeyboard([
    [Markup.button.url('(Jonas Schmedtmann) دوره کامل جاوا اسکریپت 2021 - از مبتدی تا پیشرفته زیرنویس دار', 'https://t.me/developersubtitle')],
    [Markup.button.url('آموزش مقدماتی تا پیشرفته جاوا اسکریپت (تاپلرن)', 'https://toplearn.com/c/W6J')],
    [Markup.button.url('آموزش جاوا اسکریپت (سبز لرن)', 'https://toplearn.com/c/W6J')],
    [Markup.button.url('(انگلیسی,Mosh)آموزش جاوا اسکریپت برای مبتدیان در 1 ساعت', 'https://youtu.be/W6NZfCO5SIk')],
  ]))
}



module.exports = {
  showJavaScriptResources: showJavaScriptResources,
}
