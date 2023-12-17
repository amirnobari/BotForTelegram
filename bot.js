const { Telegraf } = require('telegraf');
const moment = require('moment');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const session = {};

const startHandler = require('./start-handler/startHandler');
const aboutUs = require('./about-us/aboutUs');
const resources = require('./educational-resources/resources');
const showPythonResources = require('./educational-resources/showPythonResources');
const showJavaScriptResources = require('./educational-resources/showJavaScriptResources');
const showAlgorithmResources = require('./educational-resources/showAlgorithmResources');
const practiceWebsites = require('./practice-websites/practiceWebsites');
const articlesWebsites = require('./article-websites/articleWebsites');
const showRoadMapWebsites = require('./road-map/showRoadMapWebsites');
const showResumeWebsites = require('./resume-build/showResumeWebsites');
const showJobWebsites = require('./job-websites/showJobWebsites');
const showErrorHandlerWebsites = require('./error-handler/showErrorHandlerWebsites');
const showJavaResources = require('./educational-resources/showJavaResources');
const showNodeJsResources = require('./educational-resources/showNodeJsResources');
const showReactResources = require('./educational-resources/showReactResources');
const showِDjangoResources = require('./educational-resources/showDjangoResources');
const showِMongoDbResources = require('./educational-resources/showMongoDbResources');
const showِDockerResources = require('./educational-resources/showDockerResources');
const showِNestJsResources = require('./educational-resources/showNestJsResources');
const showCanelresources = require('./chanel/showChanelResources');

// BLACKLIST SECTION
//
// 1) Blacklist Management
const blacklistSessions = new Map();

const getAttempts = userId => blacklistSessions.get(userId)?.attempts || 0;

const incrementAttempts = userId => {
  const currentAttempts = getAttempts(userId);
  blacklistSessions.set(userId, { attempts: currentAttempts + 1 });
};
//
// 2) Blacklist Middleware
const blacklistedUsers = ['5396468910'];
const blacklistCheckMiddleware = async (ctx, next) => {
  try {
    const userId = ctx.from?.id?.toString();

    if (blacklistedUsers.includes(userId)) {
      const userAttempts = getAttempts(userId);

      if (userAttempts >= 3) {
        return;
      }

      incrementAttempts(userId);

      return ctx.reply(
        '❌ شما قادر به استفاده از ربات نمی باشید!\nبرو اتاقت و بشین به کارای بدت فک کن👋🏻'
      );
    }

    await next();
  } catch (error) {
    console.error('Blacklist Check Error:', error);
  }
};
bot.use(blacklistCheckMiddleware);

// RATE LIMIT (in-memory)
const rateLimits = new Map();
const rateLimitDuration = moment.duration(24, 'hours');

const initializeRateLimit = userId => {
  rateLimits.set(userId, [
    moment(),
    0, // requestCount
  ]);
};

const updateRateLimit = (userId, currentTime, requestCount) => {
  rateLimits.set(userId, [moment(currentTime), requestCount]);
};

const rateLimitMiddleware = async (ctx, next) => {
  try {
    const userId = ctx.from?.id?.toString();

    if (!userId) {
      throw new Error('User ID not available');
    }

    if (!rateLimits.has(userId)) {
      initializeRateLimit(userId);
    }

    const currentTime = moment();
    const [lastRequestTime, requestCount] = rateLimits.get(userId);
    const timeDifference = currentTime.diff(lastRequestTime, 'milliseconds');

    if (timeDifference > rateLimitDuration.asMilliseconds()) {
      initializeRateLimit(userId);
    }

    if (requestCount >= 5) {
      return ctx.reply(
        '❌ شما به دلیل ارسال تعداد زیادی از درخواست های مکرر، ریت لیمیت شدید!'
      );
    }

    updateRateLimit(userId, currentTime, requestCount + 1);

    await next();
  } catch (error) {
    console.error('Rate Limiting Error:', error);
  }
};
bot.use(rateLimitMiddleware);

// Start Command
bot.start(ctx => {
  // Check Blacklist
  const userId = ctx.from.id;
  if (blacklistedUsers.includes(userId)) {
    // Blacklisted Welcomer.
    return ctx.reply(
      '❌ بدلیل دغدغه های زیاد شما برای مورد استفاده قرار گرفتن ربات، شما قادر به استفاده از ربات نمیباشید ☹'
    );
  }
  // Normal User Welcomer.
  const firstName = ctx.from.first_name;
  const welcomeMessage = `سـلام ${firstName}, به ربـات دنیـای بـرنـامه نـویسـی خـیلی خوش اومـدی! ❤\nبا اسـتفـاده از دکمـه های زیر میتـونی به تـمامی منـابع و مـراجع رایـگان برنـامه نـویسـی مثـل آمـوزش ها، کانال و گروه ها، وب سایت و مقاله ها دسـترسـی داشـته باشـی. ✨💻`;

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
  ];

  ctx.reply(welcomeMessage, {
    reply_markup: {
      inline_keyboard: keyboardOptions,
    },
  });
});

// About Me section
bot.action('about_us', ctx => {
  session[ctx.from.id] = 'about_us';
  aboutUs.showAboutUs(ctx);
});

// Educational Resources section
bot.action('resources', ctx => {
  session[ctx.from.id] = 'resources';
  resources.showResources(ctx);
});

// Channels section
bot.action('chanel', ctx => {
  session[ctx.from.id] = 'chanel';
  showCanelresources.showChanelResources(ctx);
});

// Python section
bot.action('python', ctx => {
  session[ctx.from.id] = 'python';
  showPythonResources.showPythonResources(ctx);
});

// JavaScript section
bot.action('javascript', ctx => {
  session[ctx.from.id] = 'javascript';
  showJavaScriptResources.showJavaScriptResources(ctx);
});

// Algorithm section
bot.action('algorithm', ctx => {
  session[ctx.from.id] = 'algorithm';
  showAlgorithmResources.showAlgorithmResources(ctx);
});

// Resume section
bot.action('resume', ctx => {
  session[ctx.from.id] = 'resume';
  showResumeWebsites.showResumeWebsites(ctx);
});

// Practice section
bot.action('practice', ctx => {
  session[ctx.from.id] = 'practice';
  practiceWebsites.showPracticeWebsites(ctx);
});

// Articles section
bot.action('articles', ctx => {
  session[ctx.from.id] = 'articles';
  articlesWebsites.showArticlesWebsites(ctx);
});

// Road Map section
bot.action('road_map', ctx => {
  session[ctx.from.id] = 'road_map';
  showRoadMapWebsites.showRoadMapWebsites(ctx);
});

// Job section
bot.action('job', ctx => {
  session[ctx.from.id] = 'job';
  showJobWebsites.showJobWebsites(ctx);
});

// Error section
bot.action('error', ctx => {
  session[ctx.from.id] = 'error';
  showErrorHandlerWebsites.showErrorHandlerWebsites(ctx);
});

// Java section
bot.action('Java', ctx => {
  session[ctx.from.id] = 'Java';
  showJavaResources.showJavaResources(ctx);
});

// Node.js section
bot.action('Node.js', ctx => {
  session[ctx.from.id] = 'Node.js';
  showNodeJsResources.showNodeJsResources(ctx);
});

// React section
bot.action('React', ctx => {
  session[ctx.from.id] = 'React';
  showReactResources.showReactResources(ctx);
});

// Django section
bot.action('Django', ctx => {
  session[ctx.from.id] = 'Django';
  showِDjangoResources.showِDjangoResources(ctx);
});

// MongoDB section
bot.action('MongoDB', ctx => {
  session[ctx.from.id] = 'MongoDB';
  showِMongoDbResources.showِMongoDbResources(ctx);
});

// Docker section
bot.action('Docker', ctx => {
  session[ctx.from.id] = 'Docker';
  showِDockerResources.showِDockerResources(ctx);
});

// Nest.js section
bot.action('Nest.js', ctx => {
  session[ctx.from.id] = 'Nest.js';
  showِNestJsResources.showِNestJsResources(ctx);
});

// Back Button Section
bot.action('back', ctx => {
  const currentSection = session[ctx.from.id];
  if (currentSection) {
    switch (currentSection) {
      case 'about_us':
        startHandler.handleStartCommand(ctx);
        break;
      case 'resources':
        startHandler.handleStartCommand(ctx);
        break;
      case 'chanel':
        startHandler.handleStartCommand(ctx);
        break;
      case 'python':
        startHandler.handleStartCommand(ctx);
        break;
      case 'javascript':
        startHandler.handleStartCommand(ctx);
        break;
      case 'algorithm':
        startHandler.handleStartCommand(ctx);
        break;
      case 'resume':
        startHandler.handleStartCommand(ctx);
        break;
      case 'practice':
        startHandler.handleStartCommand(ctx);
        break;
      case 'articles':
        startHandler.handleStartCommand(ctx);
        break;
      case 'road_map':
        startHandler.handleStartCommand(ctx);
        break;
      case 'job':
        startHandler.handleStartCommand(ctx);
        break;
      case 'error':
        startHandler.handleStartCommand(ctx);
        break;
      case 'Java':
        startHandler.handleStartCommand(ctx);
        break;
      case 'Node.js':
        startHandler.handleStartCommand(ctx);
        break;
      case 'React':
        startHandler.handleStartCommand(ctx);
        break;
      case 'Django':
        startHandler.handleStartCommand(ctx);
        break;
      case 'MongoDB':
        startHandler.handleStartCommand(ctx);
        break;
      case 'Docker':
        startHandler.handleStartCommand(ctx);
        break;
      case 'Nest.js':
        startHandler.handleStartCommand(ctx);
        break;
    }
  }
});

// Invalid Attemps Section
const undefinedMessage = `مـتوجـه نشـدم! لطـفا از دسـتورات ربـات یـا دکـمه هـا اسـتفاده کنـید. ❤`;
const MAX_INVALID_ATTEMPTS = 5;
const TIMEOUT_DURATION_HOURS = 20;
const TIMEOUT_DURATION = TIMEOUT_DURATION_HOURS * 60 * 60 * 1000;
const TIME_FRAME = 10 * 60 * 1000;

const invalidAttempts = {};
const attemptsWhitelist = {
  97917629: true, // AmirNobari
  1104378812: true, // Arian
  987654321: false, // test-account
};

bot.on('text', async ctx => {
  try {
    const userId = ctx.from.id;

    if (attemptsWhitelist[userId]) {
      ctx.reply(`${undefinedMessage}\n[ادمین مود]`);
      return;
    }

    invalidAttempts[userId] = invalidAttempts[userId] || {
      attempts: 0,
      lastAttemptTime: 0,
    };

    const currentTime = Date.now();

    if (currentTime - invalidAttempts[userId].lastAttemptTime > TIME_FRAME) {
      invalidAttempts[userId].attempts = 0;
    }

    invalidAttempts[userId].attempts += 1;
    invalidAttempts[userId].lastAttemptTime = currentTime;

    if (invalidAttempts[userId].attempts >= MAX_INVALID_ATTEMPTS) {
      if (
        !invalidAttempts[userId].timeout ||
        currentTime > invalidAttempts[userId].timeout
      ) {
        invalidAttempts[userId].timeout = currentTime + TIMEOUT_DURATION;
      }
      const timeRemaining = Math.floor(
        (invalidAttempts[userId].timeout - currentTime) / (60 * 60 * 1000)
      );
      await ctx.reply(
        `درحـال حاضـر شـما تایـم اوت شـده اید! زمـان باقـی مـانـده تا اتمـام تایـم اوت: ${timeRemaining} سـاعت. ⏳`
      );
    } else {
      await ctx.reply(undefinedMessage);
    }
  } catch (error) {
    console.error(error);
  }
});

// Whitelist Handler for InvalidAttempts
bot.use((ctx, next) => {
  try {
    const userId = ctx.from.id;

    if (attemptsWhitelist[userId]) {
      return next();
    }

    if (invalidAttempts[userId] && invalidAttempts[userId].timeout) {
      const currentTime = Date.now();

      if (currentTime > invalidAttempts[userId].timeout) {
        invalidAttempts[userId] = { attempts: 0, lastAttemptTime: 0 };
      }
    }

    next();
  } catch (error) {
    console.error(error);
  }
});

// Launch the bot
bot.launch().then(() => {
  console.log('Bot is running!');
});
