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
const showJavaResources = require('./educational-resources/showJavaResources')
const showNodeJsResources = require('./educational-resources/showNodeJsResources')
const showReactResources = require('./educational-resources/showReactResources')
const showِDjangoResources = require('./educational-resources/showDjangoResources')
const showِMongoDbResources = require('./educational-resources/showMongoDbResources')
const showِDockerResources = require('./educational-resources/showDockerResources')
const showِNestJsResources = require('./educational-resources/showNestJsResources')

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
bot.action('resume', (ctx) => {
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
bot.action('road_map', (ctx) => {
    showRoadMapWebsites.showRoadMapWebsites(ctx)
})

//اضافه کردن بخش جاب 
bot.action('job', (ctx) => {
    showJobWebsites.showJobWebsites(ctx)
})

//اضافه کردن بخش خطاها
bot.action('error', (ctx) => {
    showErrorHandlerWebsites.showErrorHandlerWebsites(ctx)
})

//اضافه کردن بخش جاوا به تمام دوره های رایگان
bot.action('Java', (ctx) => {
    showJavaResources.showJavaResources(ctx)
})

//اضافه کردن بخش نود جی اس
bot.action('Node.js', (ctx) => {
    showNodeJsResources.showNodeJsResources(ctx)
})

//اضافه کردن بخش ری اکت
bot.action('React', (ctx) => {
    showReactResources.showReactResources(ctx)
})

//اضافه کردن بخش جانگو
bot.action('Django', (ctx) => {
    showِDjangoResources.showِDjangoResources(ctx)
})

//اضافه کردن بخش مانگو دی بی
bot.action('MongoDB', (ctx) => {
    showِMongoDbResources.showِMongoDbResources(ctx)
})

//اضافه کردن بخش داکر
bot.action('Docker', (ctx) => {
    showِDockerResources.showِDockerResources(ctx)
})

//اضافه کردن بخش نست جی اس
bot.action('Nest.js', (ctx) => {
    showِNestJsResources.showِNestJsResources(ctx)
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

//اضافه کردن ادرس سایتهای جاوا
bot.action(/^Java_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showJavaResources.redirectToshowJavaResources(ctx, course)
})

//اضافه کردن ادرس سایتهای نود جی اس
bot.action(/^Node.js_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showNodeJsResources.redirectToshowNodeJsResources(ctx, course)
})

//اضافه کردن سایتهای ری اکت
bot.action(/^React_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showReactResources.redirectToshowReactResources(ctx, course)
})

//اضافه کردن سایتهای جانگو
bot.action(/^Django_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showDjangoResources.redirectToshowDjangoResources(ctx, course)
})

//اضافه کردن سایت های مانگو دی بی 
bot.action(/^MongoDB_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showMongoDbResources.redirectToshowMongoDbResources(ctx, course)
})

//اضافه کردن سایت های داکر
bot.action(/^Docker_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showDockerResources.redirectToshowDockerResources(ctx, course)
})

//اضافه کردن سایتهای نست جی اس
bot.action(/^Nest.js_link_(.*)$/, (ctx) => {
    const [, course] = ctx.match
    showNestJsResources.redirectToshowNestJsResources(ctx, course)
})


bot.launch()
console.log('Bot is running!')
