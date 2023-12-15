function showAboutUs(ctx) {
  const amirlinkedinUrl = 'https://www.linkedin.com/in/amir-nobari1990/';
  const amirgithubUrl = 'https://github.com/amirnobari';
  const amirtelegramUrl = 'https://t.me/AmirNobari';
  const arianDiscordUrl = 'https://discordapp.com/users/1030490794987114567';
  const ariangithubUrl = 'https://github.com/arianszar';
  const ariantelegramUrl = 'https://t.me/iarynw';

  const amirInfo = `
*Amir Nobari*
I'm the founder and developer of the bot.
For more information, please visit my LinkedIn profile or
GitHub profile or Telegram profile.
`;

  const arianInfo = `
*Arian Sezar*
I'm one of the masterminds behind this awesome bot!
Feel free to reach out on Telegram & Discord.
`;

  const inlineKeyboard = [
    [
      { text: 'AmirNobari LinkedIn', url: amirlinkedinUrl },
      { text: 'AmirNobari GitHub', url: amirgithubUrl },
      { text: 'AmirNobari Telegram', url: amirtelegramUrl },
    ],
    [
      { text: 'ArianSezar Discord', url: arianDiscordUrl },
      { text: 'ArianSezar GitHub', url: ariangithubUrl },
      { text: 'ArianSezar Telegram', url: ariantelegramUrl },
    ],
    [
      {
        text: 'بازگشت 🔁',
        callback_data: 'back',
      },
    ],
  ];

  const infoMessage = `*About Us*\n${amirInfo}${arianInfo}`;

  ctx.editMessageText(infoMessage, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: inlineKeyboard,
    },
  });
}

module.exports = { showAboutUs };
