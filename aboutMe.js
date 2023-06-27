function showAboutMe(ctx) {
    const linkedinUrl = 'https://www.linkedin.com/in/amir-nobari1990/'
    const githubUrl = 'https://github.com/amirnobari'
    const infoMessage = `
      <b>About Me</b>
      I am a bot developed by Amir Nobari.
      For more information, please visit my LinkedIn profile or
      GitHub profile.
    `
    ctx.answerCbQuery(infoMessage)
    ctx.reply(infoMessage, {
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'LinkedIn Profile', url: linkedinUrl },
                    { text: 'GitHub Profile', url: githubUrl },
                ],
            ],
        },
    })
}

module.exports = { showAboutMe };
