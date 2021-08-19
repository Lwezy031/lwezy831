const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;   

  let user = message.author;
    //------Saniyeyi değiştire bilirsin (1d) => 1 gün ya da (10m) => 10 dakika şeklinde
  let timeout = ms('1d');
      //------Saniyeyi değiştire bilirsin (1d) => 1 gün ya da (10m) => 10 dakika şeklinde
  let vip = await db.fetch(`vip_${user.id}`)
  if(vip === true) amount = Math.floor(Math.random() * ewing.maxParaVerme.gunlukVIP) + 1;
  if (vip === null) amount = Math.floor(Math.random() * ewing.maxParaVerme.gunlukVIP) + 1
  let daily = await db.fetch(`gunluk_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#8bbaf0")
    .setFooter(ewing.altYazi)
    .setDescription(`Kanka kaç saat kaldığını kodlayamadım üşendim \`1\` gün sonra gel.`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#8bbaf0")
  .setFooter(ewing.altYazi)
  .setDescription(`Günlük hediye olarak \`${amount}\` ${ewing.paraBirimi} Kazandın güle güle kullan.`);
  message.channel.send(moneyEmbed)
  db.add(`para_${message.guild.id}_${user.id}`, amount)
  db.set(`gunluk_${message.guild.id}_${user.id}`, Date.now())

  }
  
};


module.exports.help = {
  name:"daily",
  aliases: ["day"]
}