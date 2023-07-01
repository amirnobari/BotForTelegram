function showAboutMe(ctx) {
    const linkedinUrl = 'https://www.linkedin.com/in/amir-nobari1990/'
    const githubUrl = 'https://github.com/amirnobari'
    const telegramUrl = 'https://t.me/AmirNobari'
    const infoMessage = `
      <b>About Me</b>
      I am a bot developed by Amir Nobari.
      For more information, please visit my LinkedIn profile or
      GitHub profile or Telegram profile.
    `
    ctx.answerCbQuery(infoMessage)
    ctx.reply(infoMessage, {
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'LinkedIn Profile', url: linkedinUrl },
                    { text: 'GitHub Profile', url: githubUrl },
                    { text: 'Telegram Profile', url: telegramUrl },
                ],
            ],
        },
    })
}

module.exports = { showAboutMe };
