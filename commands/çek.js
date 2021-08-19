const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;   

  let user = message.author;

  let member = db.fetch(`para_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`banka_${message.guild.id}_${user.id}`)

  if (args[0] == 'hepsi') {
    let para = await db.fetch(`banka_${message.guild.id}_${user.id}`)
    
    db.subtract(`banka_${message.guild.id}_${user.id}`, para)
    db.add(`para_${message.guild.id}_${user.id}`, para)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Bankadaki bütün paralarını çektin!**`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Lütfen bir miktar belirt.**`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Eksi bir para çekemem. Botumu bozmaya çalışıyorsun?!?!?!**`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Belirttiğin kadar para bankan'da bulunmamaktadır.**`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle(message.author.tag)
  .setFooter(ewing.altYazi)
  .setDescription(`**Bankandan \`${args[0]}\` ${ewing.paraBirimi} Miktar para çekmiş bulunmaktasın.**`);

  message.channel.send(embed5)
  db.subtract(`banka_${message.guild.id}_${user.id}`, args[0])
  db.add(`para_${message.guild.id}_${user.id}`, args[0])
  }
}


module.exports.help = {
  name:"çek",
  aliases: ["paraçek"]
}