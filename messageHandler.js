// messageHandler.js
const gptConversation = require('./gptConversation')

let isChatGptEnabled = false

async function handleMessage(ctx) {
    if (!isChatGptEnabled) {
        ctx.reply('Please click on "Chat with GPT" to start the conversation.')
        return
    }
    const userSession = ctx.session
    const question = ctx.message.text

    if (!question) {
        // Skip processing empty messages
        return
    }

    if (gptConversation.isQuestionLimitExceeded(userSession)) {
        ctx.reply('You have reached the maximum number of questions allowed.')
        return
    }

    gptConversation.sendResponse(ctx, question, userSession)
}

function enableChatGPT(ctx) {
    isChatGptEnabled = true
    ctx.reply('You can now start the conversation with GPT.You can ask 15 questions for free every day !')
}

module.exports = {
    handleMessage,
    enableChatGPT
}
