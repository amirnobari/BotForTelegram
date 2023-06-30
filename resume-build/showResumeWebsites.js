const { Markup } = require('telegraf');

const showResumeWebsites = (ctx) => {
  ctx.reply('وب سایت هایی برای ساخت رزومه (رایگان)', Markup.inlineKeyboard([
    [Markup.button.url('سایت canva', 'https://www.canva.com/create/resumes/')],
    [Markup.button.url('سایت resume.io', 'https://resume.io/uk/resume-builder?irclickid=yhT3XZVt2xyNRLjVfK03gVh3UkF2jjTS204sSk0&utm_source=impact_affiliates&utm_campaign=%22Sub-network%22&utm_affiliatename=YieldKit%20GmbH&utm_medium=17609&utm_affiliateid=357605&irgwc=1')],
  ]));
};

module.exports = {
  showResumeWebsites: showResumeWebsites,
};
