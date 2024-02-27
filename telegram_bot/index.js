const {Telegraf}=require('telegraf');
const axios = require('axios')


const bot = new Telegraf();
bot.start((ctx)=> ctx.reply('Welcome to the new coding bot from saikat.'));
bot.command('mergesort', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/SaikatKar-12/CppCompetitive-/main/cCodes/mergesort.c');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('heapsort', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/SaikatKar-12/CppCompetitive-/main/cCodes/heapsort.c');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.command('quicksort', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/SaikatKar-12/CppCompetitive-/main/cCodes/quicksort.c');
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.on('sticker',(ctx)=>ctx.reply('❤️'))
bot.launch();