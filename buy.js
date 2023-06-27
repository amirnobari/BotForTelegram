module.exports = (bot) => {
  // Handler for the /buy command
  bot.action('buy', (ctx) => {
    const buyMessage = `
        <b>Buy Account</b>
        Please select an account plan:
      `
    ctx.replyWithHTML(buyMessage, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Daily (100 questions) - $1', callback_data: 'buy_daily' },
            { text: 'Daily (1000 questions) - $9', callback_data: 'buy_daily_unlimited' },
            { text: 'Lifetime - $50', callback_data: 'buy_lifetime' },
          ],
        ],
      },
    })
  })

  // Handler for processing the selected account plan
  bot.action('buy_daily', (ctx) => {
    const paymentLink = 'TRUWpoDe2rpXAFerSrEyfwgMGzJzxr6X26'
    const buyMessage = `
        <b>Account Plan: Daily (100 questions)</b>
        Price: $1
        <i>Please deposit the amount to the following cryptocurrency TRC20 
        address:</i>
        ${paymentLink}
        <i>After depositing, please send a message to the following username:</i>
        @AmirNobari
      `
    ctx.answerCbQuery()
    ctx.replyWithHTML(buyMessage)
  })

  bot.action('buy_daily_unlimited', (ctx) => {
    const paymentLink = 'TRUWpoDe2rpXAFerSrEyfwgMGzJzxr6X26'
    const buyMessage = `
        <b>Account Plan: Daily (1000 questions)</b>
        Price: $9
        <i>Please deposit the amount to the following cryptocurrency TRC20 
        address:</i>
        ${paymentLink}
        <i>After depositing, please send a message to the following username:</i>
        @AmirNobari
      `
    ctx.answerCbQuery()
    ctx.replyWithHTML(buyMessage)
  })

  bot.action('buy_lifetime', (ctx) => {
    const paymentLink = 'TRUWpoDe2rpXAFerSrEyfwgMGzJzxr6X26'
    const buyMessage = `
        <b>Account Plan: Lifetime</b>
        Price: $50
        <i>Please deposit the amount to the following cryptocurrency TRC20 
        address:</i>        
        ${paymentLink}
        <i>After depositing, please send a message to the following username:</i>
        @AmirNobari
      `
    ctx.answerCbQuery()
    ctx.replyWithHTML(buyMessage)
  })
}
