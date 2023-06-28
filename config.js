const session = require('telegraf-session-local')

const enableSession = (bot) => {
  bot.use(new session())
}

const isChatGptEnabled = false

module.exports = {
  enableSession: enableSession,
  isChatGptEnabled: isChatGptEnabled
}