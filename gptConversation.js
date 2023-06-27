// تابعی برای بررسی محدودیت تعداد سوالات
function isQuestionLimitExceeded(userSession) {
  if (!userSession.questionCount) {
    userSession.questionCount = 0
  }
  return userSession.questionCount >= 15
}

// تابعی برای ارسال پاسخ از طریق OpenAI
async function sendResponse(ctx, question, userSession) {
  try {
    const responseMessage = await openaiModule.generateResponse(question)

    const welcomeMessage = `Welcome To My Bot Dear, ${ctx.from.first_name}!\n\nYou have asked ${userSession.questionCount} questions. ${15 - userSession.questionCount} questions remaining.`
    ctx.reply(`${welcomeMessage}\n\n${responseMessage}`)
  } catch (error) {
    console.error(error)
    ctx.reply('Sorry, an error occurred while processing your question.')
  }
}

// تابعی برای شروع مکالمه با GPT
async function startGptConversation(ctx, userSession) {
  userSession.isChatGptEnabled = true
  ctx.reply('You can now start the conversation with GPT.')
}

module.exports = {
  startGptConversation,
  sendResponse,
  isQuestionLimitExceeded,
}
