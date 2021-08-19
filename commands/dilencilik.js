const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;    

  let user = message.author;
  //------Saniyeyi değiştire bilirsin (5s) => 5 saniye ya da (10m) => 10 dakika şeklinde
  let timeout = ms('5s');
  //------Saniyeyi değiştire bilirsin (5s) => 5 saniye ya da (10m) => 10 dakika şeklinde
  let vip = await db.fetch(`vip_${user.id}`)
  if(vip === true) amount = Math.floor(Math.random() * ewing.maxParaVerme.dilencilikVIP) + 1;
  if (vip === null) amount = Math.floor(Math.random() * ewing.maxParaVerme.dilencilik) + 1;

  let dilenme = await db.fetch(`dilen_${message.guild.id}_${user.id}`);

  if (dilenme !== null && timeout - (Date.now() - dilenme) > 0) {
    let time = ms(timeout - (Date.now() - dilenme));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#0x7289UA")
    .setDescription(`Daha önce dilencilik yaptıgın için \`5\` Saniye sonra Komutu gene kullanabilirsin!`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#0x7289UA")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Dostum Dilenerek \`${amount}\` ${ewing.paraBirimi} kazandın vay aq**`);
  message.channel.send(moneyEmbed)
  db.add(`para_${message.guild.id}_${user.id}`, amount)
  db.set(`dilen_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"dilen",
  aliases: ["dilencilik","dilenmek"]
}