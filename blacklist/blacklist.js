const blacklistedUsers = ['5396468910'];
const blacklistedMessage = `❌ بدلیل دغدغه های زیاد شما برای مورد استفاده قرار گرفتن ربات، شما قادر به استفاده از ربات نمی‌باشید ☹`;
const blacklistCheckMiddleware = async (ctx, next) => {
  try {
    const userId = ctx.from?.id?.toString();

    if (blacklistedUsers.includes(userId)) {
      return ctx.reply(blacklistedMessage);
    }

    await next();
  } catch (error) {
    console.error('Blacklist Check Error:', error);
  }
};

module.exports = {
  blacklistedUsers,
  blacklistedMessage,
  blacklistCheckMiddleware,
};
