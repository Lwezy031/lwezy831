const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;  
  
  let user = message.author;
  
  
  function isOdd(num) { 
    if ((num % 2) == 0) return false;
    else if ((num % 1) == 1) return true;
  }
  
  let colour = args[0];
  let money = parseInt(args[1]);
  let moneydb = await db.fetch(`para_${message.guild.id}_${user.id}`)
  
  let random = Math.floor(Math.random() * 37);
  
  let moneyhelp = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(ewing.altYazi)
  .setDescription(`Bir miktar berlirlemen gerek! \`Örnek: ${ewing.prefix}roulet <renk> <miktar>\``);
  
  let moneymore = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(ewing.altYazi)
  .setDescription(`**Sende olmayan parayımı yatırmaya calisiyorsun!**`);
  
  let colorbad = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(ewing.altYazi)
  .setDescription(`Bir renk belirt | Kırmızı [1.5x] Siyah [2x] Yeşil [15x]`);
  

  if (!colour)  return message.channel.send(colorbad);
  colour = colour.toLowerCase()
  if (!money) return message.channel.send(moneyhelp); 
  if (money > moneydb) return message.channel.send(moneymore);
  
  if (colour == "s" || colour.includes("siyah")) colour = 0;
  else if (colour == "k" || colour.includes("kırmızı")) colour = 1;
  else if (colour == "y" || colour.includes("yeşil")) colour = 2;
  else return message.channel.send(colorbad);
  let timeout = ms('5s');
  let rulett = await db.fetch(`rulet_${message.guild.id}_${user.id}`);
  if (rulett !== null && timeout - (Date.now() - rulett) > 0) {
    let time = ms(timeout - (Date.now() - rulett));
    
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#0x7289UA")
    .setFooter("Coded by Root")
    .setDescription(`**Lütfen botu yormamak için \`5\`sanyiye beklermisin.**`);
    message.channel.send(timeEmbed)
  
  } else {


    if (random == 0 && colour == 2) { // Green
    money *= 15
    db.add(`para_${message.guild.id}_${user.id}`, money)
    db.set(`rulet_${message.guild.id}_${user.id}`, Date.now())
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Heyyy! Yeşil tuttu \`${money}\` ${ewing.paraBirimi} kazandın**\n\nÇarpanı: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Kazandıgı para ${money} yeşilde`)
        
      } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`para_${message.guild.id}_${user.id}`, money)
        db.set(`rulet_${message.guild.id}_${user.id}`, Date.now())
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Heyyy! Kırmızı tuttu \`${money}\` ${ewing.paraBirimi} kazandın**\n\nÇarpanı: 1.5x`);
        message.channel.send(moneyEmbed2)
      } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`para_${message.guild.id}_${user.id}`, money)
        db.set(`rulet_${message.guild.id}_${user.id}`, Date.now())
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Heyyy! Siyah tuttu \`${money}\` ${ewing.paraBirimi} kazandın**\n\nÇarpanı: 2x`);
        message.channel.send(moneyEmbed3)
      } else { // Wrong
        db.subtract(`para_${message.guild.id}_${user.id}`, money)
        db.set(`rulet_${message.guild.id}_${user.id}`, Date.now())
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Malesefki  \`${money}\` ${ewing.paraBirimi} kaybettin şansını birdaha dene**`);
        message.channel.send(moneyEmbed4)
    }
  }
}

  
  module.exports.help = {
    name:"rulet",
    aliases: ["rulettte","r"]
  }