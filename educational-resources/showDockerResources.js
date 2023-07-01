const { Markup } = require('telegraf');

const showِDockerResources = (ctx) => {
  ctx.reply('تمام دوره های رایگان داکر', Markup.inlineKeyboard([
    [Markup.button.url('آموزش 0 تا 100 داکر (فردارس)', 'https://blog.faradars.org/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AF%D8%A7%DA%A9%D8%B1-docker-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86/')],
    [Markup.button.url(' آموزش کامل Docker و Kubernetes (سریع آسان)', 'https://sariasan.com/featured/kubernetes-docker-full-free-lessons/')],
    [Markup.button.url('آموزش مقدماتی داکر (انگلیسی,mosh)' ,'https://youtu.be/pTFZFxd4hOI')],
  ]));
};



module.exports = {
  showِDockerResources: showِDockerResources,
};
