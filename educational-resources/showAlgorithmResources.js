const { Markup } = require('telegraf')

const showAlgorithmResources = (ctx) => {
  ctx.reply('دوره های رایگان الگوریتم', Markup.inlineKeyboard([
    [Markup.button.url('الگوریتم و فلوچارت به انگلیسی (articulate)', 'https://articulate.com/lp/articulate-360-i?utm_source=google-sem&utm_medium=cpc&keyword=learning%20software&utm_campaign=ggl|sem|nbrd|A360|eu-t1|Discovery|Broad|24p|LowIntentQualified&utm_content=1001&lqid=engine:google|campaignid:20038889651|adid:656433912646|gclid:CjwKCAjw-vmkBhBMEiwAlrMeF_YFrU1mvHpdlEWidQVSuHe-PWANnvuiGjdwddC7AAdFnkg8imTrtBoCNJEQAvD_BwE&gclid=CjwKCAjw-vmkBhBMEiwAlrMeF_YFrU1mvHpdlEWidQVSuHe-PWANnvuiGjdwddC7AAdFnkg8imTrtBoCNJEQAvD_BwE')],
    [Markup.button.url('آموزش الگوریتم و فلوچارت (کدیاد)', 'https://codeyad.com/course/2009/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%A7%D9%84%DA%AF%D9%88%D8%B1%DB%8C%D8%AA%D9%85-%D9%88-%D9%81%D9%84%D9%88%DA%86%D8%A7%D8%B1%D8%AA--%D9%BE%DB%8C%D8%B4%D9%86%DB%8C%D8%A7%D8%B2-%D9%88%D8%B1%D9%88%D8%AF-%D8%A8%D9%87-%D8%AF%D9%86%DB%8C%D8%A7%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C')],
    [Markup.button.url('آموزش الکوریتم و فلوچارت به زبان ساده (دانشجویار)', 'https://www.daneshjooyar.com/learn-algorithm/')],
  ]))
}



module.exports = {
  showAlgorithmResources: showAlgorithmResources,
}
