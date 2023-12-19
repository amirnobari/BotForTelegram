const undefinedMessage = `مـتوجـه نشـدم! لطـفا از دسـتورات ربـات یـا دکـمه هـا اسـتفاده کنـید. ❤`
const MAX_INVALID_ATTEMPTS = 5
const TIMEOUT_DURATION_HOURS = 20
const TIMEOUT_DURATION = TIMEOUT_DURATION_HOURS * 60 * 60 * 1000
const TIME_FRAME = 10 * 60 * 1000

const invalidAttempts = {}
const attemptsWhitelist = {
  97917629: true, // AmirNobari
  1104378812: true, // Arian
  987654321: false, // test-account
}

const startAttempts = {}

const handleText = async ctx => {
  try {
    const userId = ctx.from.id

    if (attemptsWhitelist[userId] === true || [97917629, 1104378812].includes(userId)) {
      ctx.reply(`${undefinedMessage}\n[ادمین مود]`)
      return
    }


    invalidAttempts[userId] = invalidAttempts[userId] || {
      attempts: 0,
      lastAttemptTime: 0,
    }

    const currentTime = Date.now()

    if (currentTime - invalidAttempts[userId].lastAttemptTime > TIME_FRAME) {
      invalidAttempts[userId].attempts = 0
    }

    invalidAttempts[userId].attempts += 1
    invalidAttempts[userId].lastAttemptTime = currentTime

    if (invalidAttempts[userId].attempts >= MAX_INVALID_ATTEMPTS) {
      if (
        !invalidAttempts[userId].timeout ||
        currentTime > invalidAttempts[userId].timeout
      ) {
        invalidAttempts[userId].timeout = currentTime + TIMEOUT_DURATION
      }
      const timeRemaining = Math.floor(
        (invalidAttempts[userId].timeout - currentTime) / (60 * 60 * 1000)
      )
      await ctx.reply(
        `درحـال حاضـر شـما تایـم اوت شـده اید! زمـان باقـی مـانـده تا اتمـام تایـم اوت: ${timeRemaining} سـاعت. ⏳`
      )
    } else {
      if (ctx.update.message.text === '/start') {
        startAttempts[userId] = startAttempts[userId] || 0

        if (startAttempts[userId] >= MAX_INVALID_ATTEMPTS) {
          const timeoutEnd = currentTime + TIMEOUT_DURATION
          startAttempts[userId] = timeoutEnd

          await ctx.reply(`شما برای مدت ${TIMEOUT_DURATION_HOURS} ساعت بلاک شده‌اید.`)
          return
        }

        startAttempts[userId]++
      }

      await ctx.reply(undefinedMessage)
    }
  } catch (error) {
    console.error(error)
  }
}

const handleWhitelist = (ctx, next) => {
  try {
    const userId = ctx.from.id

    if (attemptsWhitelist[userId]) {
      return next()
    }

    if (invalidAttempts[userId] && invalidAttempts[userId].timeout) {
      const currentTime = Date.now()

      if (currentTime > invalidAttempts[userId].timeout) {
        invalidAttempts[userId] = { attempts: 0, lastAttemptTime: 0 }
      }
    }

    next()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  handleText,
  handleWhitelist,
}
