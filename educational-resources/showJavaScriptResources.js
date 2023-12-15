const showJavaScriptResources = ctx => {
  ctx.editMessageText('تمام دوره های رایگان جاوا اسکریپت! 🎁', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '(Jonas Schmedtmann) دوره کامل جاوا اسکریپت 2021 - از مبتدی تا پیشرفته دوبله فارسی',
            url: 'https://t.me/jschallenges_bot',
          },
        ],
        [
          {
            text: 'آموزش مقدماتی تا پیشرفته جاوا اسکریپت (تاپلرن)',
            url: 'https://toplearn.com/c/W6J',
          },
        ],
        [
          {
            text: '(انگلیسی, Mosh)آموزش جاوا اسکریپت برای مبتدیان در 1 ساعت',
            url: 'https://youtu.be/W6NZfCO5SIk',
          },
        ],
        [
          {
            text: 'آموزش مقدماتی جاوا اسکریپت (میلاد بهرامی)',
            url: 'https://www.youtube.com/playlist?list=PLhpS3tgUDZcqcMv8-wypJxUpqxi95l-02',
          },
        ],
        [
          {
            text: 'آموزش جاوا اسکریپت (سبز لرن)',
            url: 'https://toplearn.com/c/W6J',
          },
        ],
        [{ text: 'بازگشت 🔁', callback_data: 'back' }],
      ],
    },
  });
};

module.exports = {
  showJavaScriptResources: showJavaScriptResources,
};
