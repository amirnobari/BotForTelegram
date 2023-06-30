const { Markup } = require('telegraf');

const showArticlesWebsites = (ctx) => {
  ctx.reply('وب سایتهایی برای مطالعه مقالات و حضور در سمینار های آنلاین برنامه نویسی', Markup.inlineKeyboard([
    [Markup.button.url('وب سایت (codefirstgirls)', 'https://codefirstgirls.com/courses/classes/coding-kickstarter/?utm_source=google-ads&utm_medium=b2c-international&utm_campaign=free-international-ck&gclid=CjwKCAjw-vmkBhBMEiwAlrMeF95tLLJmz-wagGK2N6HnFGJYB6nloepfP9tvDUVvz_iAaqoktHpF2BoC19UQAvD_BwE#cksinternational&utm_term=coding%20courses%20best&utm_campaign=International+-+Classes+Traffic&utm_source=adwords&utm_medium=ppc&hsa_acc=4524824748&hsa_cam=20080415252&hsa_grp=148326393509&hsa_ad=657270476802&hsa_src=g&hsa_tgt=kwd-556543322125&hsa_kw=coding%20courses%20best&hsa_mt=b&hsa_net=adwords&hsa_ver=3')],
    [Markup.button.url('وب سایت (الکامکو)', 'https://elecomco.com/category/programming/')],
  ]));
};

module.exports = {
  showArticlesWebsites: showArticlesWebsites,
};
