const { Markup } = require('telegraf');

const showJobWebsites = (ctx) => {
  ctx.reply('وب سایت هایی برای کاریابی برنامه نویسان', Markup.inlineKeyboard([
    [Markup.button.url('سایت(لینکدین)', 'https://www.linkedin.com')],
    [Markup.button.url(' سایت (جابینجا) ', 'https://www.jobinja.ir/')],
    [Markup.button.url(' سایت (inded) ', 'https://www.indeed.com/')],
    [Markup.button.url(' سایت (glassdoor) ', 'https://www.glassdoor.com')],
    [Markup.button.url('کانال (Job Finding | Search for your job)', 'https://t.me/jobs_finding')],
  ]));
};

module.exports = {
  showJobWebsites: showJobWebsites,
};
