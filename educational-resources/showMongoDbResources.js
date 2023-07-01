const { Markup } = require('telegraf');

const showِMongoDbResources = (ctx) => {
  ctx.reply('آموزش های رایگان مانگو دی بی', Markup.inlineKeyboard([
    [Markup.button.url('آموزش mongodb (ری اکت آپ )', 'https://reactapp.ir/courses/%D8%AF%D9%88%D8%B1%D9%87-%D9%87%D8%A7%DB%8C-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-mongodb/')],
    [Markup.button.url('آموزش رایگان MongoDB (مکتب خونه)', 'https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-mongodb-mk1264/')],
    [Markup.button.url('کرش کورس مانگو دی بی (انگلیسی , web dev simplified)' ,'https://youtu.be/ofme2o29ngU')],
  ]));
};



module.exports = {
  showِMongoDbResources: showِMongoDbResources,
};
