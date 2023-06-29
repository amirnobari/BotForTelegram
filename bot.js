const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const startHandler = require('./startHandler')
const aboutMe = require('./aboutMe')
const resources = require('./resources')
const showPythonResources = require('./showPythonResources')
const showJavaScriptResources = require('./showJavaScriptResources') // تغییر نام متغیر

// Register start command handler from startHandler.js
bot.start((ctx) => startHandler.handleStartCommand(ctx, bot))

// Middleware for showing the about me message
bot.action('about_me', aboutMe.showAboutMe)
bot.action('resources', resources.showResources)

// اضافه کردن گزینه "تمام دوره‌های رایگان پایتون"
bot.action('python', (ctx) => {
    showPythonResources.showPythonResources(ctx)
})

// اضافه کردن گزینه "تمام دوره‌های رایگان جاوا اسکریپت"
bot.action('javascript', (ctx) => {
    showJavaScriptResources.showJavaScriptResources(ctx)
})

// اضافه کردن گزینه "لینک دوره پایتون"
bot.action(/^python_course_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showPythonResources.redirectToPythonCourseWebsite(ctx, course)
})

// اضافه کردن گزینه "لینک دوره جاوا اسکریپت"
bot.action(/^javascript_course_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showJavaScriptResources.redirectToJavaScriptCourseWebsite(ctx, course)
})

bot.launch()
console.log('Bot is running!')
