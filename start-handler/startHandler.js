const handleStartCommand = ctx => {
  const firstName = ctx.from.first_name;
  ctx.editMessageText(
    `سـلام ${firstName}, بـه ربـات دنیـای بـرنـامه نـویسـی خـیلی خوش اومـدی! ❤\nبا اسـتفـاده از دکمـه های زیر میتـونی به تـمامی منـابع و مـراجع رایـگان برنـامه نـویسـی مثـل آمـوزش ها،کانال و گروه ها،وب سایت و مقاله ها دسـترسـی داشـته باشـی. ✨💻`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'آموزش های برنامه نویسی', callback_data: 'resources' },
            { text: 'کامیونیتی برنامه نویسی', callback_data: 'chanel' },
          ],
          [
            {
              text: 'منابع رفع اشکال کد',
              callback_data: 'error',
            },
            { text: 'مقالات برنامه نویسی', callback_data: 'articles' },
          ],
          [
            {
              text: 'مراجع تمرین کدنویسی',
              callback_data: 'practice',
            },
            {
              text: 'منابع رودمپ',
              callback_data: 'road_map',
            },
          ],
          [
            {
              text: 'مراجع ساخت رزومه',
              callback_data: 'resume',
            },
            {
              text: 'محیط های فریلنسری',
              callback_data: 'job',
            },
          ],
          [
            {
              text: 'درباره ما',
              callback_data: 'about_us',
            },
          ],
        ],
      },
    }
  );
};

module.exports = {
  handleStartCommand: handleStartCommand,
};
