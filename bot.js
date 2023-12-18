const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const session = {}

const {
  handleText,
  handleWhitelist,
} = require('./invalid-attempts/invalidAttempts')
const blacklistModule = require('./blacklist/blacklist')
const startHandler = require('./start-handler/startHandler')
const aboutUs = require('./about-us/aboutUs')
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
const showCanelresources = require('./chanel/showChanelResources')

// Blacklist Check Middleware
bot.use(blacklistModule.blacklistCheckMiddleware)

// Start Command
bot.start(ctx => {
  const firstName = ctx.from.first_name
  const welcomeMessage = `سـلام ${firstName}, به ربـات دنیـای بـرنـامه نویسـی خـیلی خوش اومـدی! ❤\nبا اسـتفـاده از دکمـه های زیر میتـوانی به تـمامی منـابع و مـراجع رایـگان برنـامه نـویسـی مثـل آمـوزش ها، کانال و گروه ها، وب سایت و مقاله ها دسـترسـی داشـته باشـی. ✨💻`

  const keyboardOptions = [
    [
      { text: 'آموزش های برنامه نویسی', callback_data: 'resources' },
      { text: 'کامیونیتی برنامه نویسی', callback_data: 'chanel' },
    ],
    [
      { text: 'منابع رفع اشکال کد', callback_data: 'error' },
      { text: 'مقالات برنامه نویسی', callback_data: 'articles' },
    ],
    [
      { text: 'مراجع تمرین کدنویسی', callback_data: 'practice' },
      { text: 'منابع رودمپ', callback_data: 'road_map' },
    ],
    [
      { text: 'مراجع ساخت رزومه', callback_data: 'resume' },
      { text: 'محیط های فریلنسری', callback_data: 'job' },
    ],
    [{ text: 'درباره ما', callback_data: 'about_us' }],
  ]

  ctx.reply(welcomeMessage, {
    reply_markup: {
      inline_keyboard: keyboardOptions,
    },
    force_reply: true,
  })
})

// About Me section
bot.action('about_us', ctx => {
  session[ctx.from.id] = 'about_us'
  aboutUs.showAboutUs(ctx)
})

// Educational Resources section
bot.action('resources', ctx => {
  session[ctx.from.id] = 'resources'
  resources.showResources(ctx)
})

// Channels section
bot.action('chanel', ctx => {
  session[ctx.from.id] = 'chanel'
  showCanelresources.showChanelResources(ctx)
})

// Python section
bot.action('python', ctx => {
  session[ctx.from.id] = 'python'
  showPythonResources.showPythonResources(ctx)
})

// JavaScript section
bot.action('javascript', ctx => {
  session[ctx.from.id] = 'javascript'
  showJavaScriptResources.showJavaScriptResources(ctx)
})

// Algorithm section
bot.action('algorithm', ctx => {
  session[ctx.from.id] = 'algorithm'
  showAlgorithmResources.showAlgorithmResources(ctx)
})

// Resume section
bot.action('resume', ctx => {
  session[ctx.from.id] = 'resume'
  showResumeWebsites.showResumeWebsites(ctx)
})

// Practice section
bot.action('practice', ctx => {
  session[ctx.from.id] = 'practice'
  practiceWebsites.showPracticeWebsites(ctx)
})

// Articles section
bot.action('articles', ctx => {
  session[ctx.from.id] = 'articles'
  articlesWebsites.showArticlesWebsites(ctx)
})

// Road Map section
bot.action('road_map', ctx => {
  session[ctx.from.id] = 'road_map'
  showRoadMapWebsites.showRoadMapWebsites(ctx)
})

// Job section
bot.action('job', ctx => {
  session[ctx.from.id] = 'job'
  showJobWebsites.showJobWebsites(ctx)
})

// Error section
bot.action('error', ctx => {
  session[ctx.from.id] = 'error'
  showErrorHandlerWebsites.showErrorHandlerWebsites(ctx)
})

// Java section
bot.action('Java', ctx => {
  session[ctx.from.id] = 'Java'
  showJavaResources.showJavaResources(ctx)
})

// Node.js section
bot.action('Node.js', ctx => {
  session[ctx.from.id] = 'Node.js'
  showNodeJsResources.showNodeJsResources(ctx)
})

// React section
bot.action('React', ctx => {
  session[ctx.from.id] = 'React'
  showReactResources.showReactResources(ctx)
})

// Django section
bot.action('Django', ctx => {
  session[ctx.from.id] = 'Django'
  showِDjangoResources.showِDjangoResources(ctx)
})

// MongoDB section
bot.action('MongoDB', ctx => {
  session[ctx.from.id] = 'MongoDB'
  showِMongoDbResources.showِMongoDbResources(ctx)
})

// Docker section
bot.action('Docker', ctx => {
  session[ctx.from.id] = 'Docker'
  showِDockerResources.showِDockerResources(ctx)
})

// Nest.js section
bot.action('Nest.js', ctx => {
  session[ctx.from.id] = 'Nest.js'
  showِNestJsResources.showِNestJsResources(ctx)
})

// Back Button Section
bot.action('back', ctx => {
  const currentSection = session[ctx.from.id]
  if (currentSection) {
    startHandler.handleStartCommand(ctx)
  }
})

// Invalid Attempts Section
bot.use(handleWhitelist)
bot.on('text', async ctx => await handleText(ctx))

bot.launch()
