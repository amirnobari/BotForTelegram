const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

const startHandler = require('./start-handler/startHandler')
const aboutMe = require('./about-me/aboutMe')
const resources = require('./educational-resources/resources')
const showPythonResources = require('./educational-resources/showPythonResources')
const showJavaScriptResources = require('./educational-resources/showJavaScriptResources')
const showAlgorithmResources = require('./educational-resources/showAlgorithmResources')
const practiceWebsites = require('./practice-websites/practiceWebsites')
const articlesWebsites = require('./article-websites/articleWebsites')
const showRoadMapWebsites = require('./road-map/showRoadMapWebsites')
const showResumeWebsites = require('./resume-build/showResumeWebsites')
const showJobWebsites = require('./job-websites/showJobWebsites')
const showErrorHandlerWebsites = require('./error-handler/showErrorHandlerWebsites')


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

//اضافه کردن "تمام دوره های رایگان الکوریتم"
bot.action('algorithm', (ctx) => {
showAlgorithmResources.showAlgorithmResources(ctx)
})
//بخش ساخت رزومه
bot.action('resume',(ctx)=>{
    showResumeWebsites.showResumeWebsites(ctx)
})

// اضافه کردن گزینه "وب سایت‌هایی برای تمرین و یادگیری برنامه نویسی"
bot.action('practice', (ctx) => {
    practiceWebsites.showPracticeWebsites(ctx)
})

//اضافه کردن بخش مقالات
bot.action('articles', (ctx) => {
    articlesWebsites.showArticlesWebsites(ctx)
})

//اضافه کردن بخش رود مپ
bot.action('road_map',(ctx) =>{
    showRoadMapWebsites.showRoadMapWebsites(ctx)
})

//اضافه کردن بخش جاب 
bot.action('job',(ctx) =>{
    showJobWebsites.showJobWebsites(ctx)
})

//اضافه کردن بخش خطاها
bot.action('error',(ctx) =>{
    showErrorHandlerWebsites.showErrorHandlerWebsites(ctx)
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

//اضافه کردن دوره ها به لیمک دوره الگوریتم
bot.action(/^algorithm_course_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showAlgorithmResources.redirectToAlgorithmCourseWebsite(ctx, course)
})

//اضافه کردن سایتهای رزومه سازی
bot.action(/^resume_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showResumeWebsites.redirectshowToResumeWebsites(ctx, course)
})

//اضافه کردن ادرس سایت های رودمپ
bot.action(/^road_map_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showRoadMapWebsites.redirectToshowRoadMapWebsites(ctx, course)
})

//اضافه کردن ادرس سایت های کاریابی
bot.action(/^job_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showJobWebsites.redirectToshowJobWebsites(ctx, course)
})

//اضافه کردن ادرس سایتهای خطاها
bot.action(/^error_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showErrorHandlerWebsites.redirectToshowErrorHandlerWebsites(ctx, course)
})

bot.launch()
console.log('Bot is running!')
