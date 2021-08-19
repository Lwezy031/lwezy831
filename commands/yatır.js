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
    let money = await db.fetch(`para_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`banka_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setTitle(message.author.tag)
    .setColor('#0x7289UA')
    .setFooter(ewing.altyazi)
    .setDescription("Yeterli paran bulunmamaktadır!")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`banka_${message.guild.id}_${user.id}`, money)
    db.subtract(`para_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
    .setTitle(message.author.tag)
  .setColor("#0x7289UA")
  .setFooter(ewing.altyazi)
  .setDescription(`Bütün paranı bankaya yatırmış bulunmaktadır.`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle(message.author.tag)
  .setColor("#0x7289UA")
  .setFooter(ewing.altyazi)
  .setDescription(`Lütfen miktar bir belirt.`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setTitle(message.author.tag)
  .setColor("#0x7289UA")
  .setFooter(ewing.altyazi)
  .setDescription(`Eksi para yatıramazsın! Botumu bozacan aq`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setTitle(message.author.tag)
  .setColor("#0x7289UA")
  .setFooter(ewing.altyazi)
  .setDescription(`Yeterli paran bulunmamaktadır`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setTitle(message.author.tag)
  .setFooter(ewing.altyazi)
  .setColor("#d604cf")
  .setDescription(`Bankana **${args[0]}** ${ewing.paraBirimi} Yatırdın`);

  message.channel.send(embed5)
  db.add(`banka_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`para_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"yatır",
  aliases: ["parayatır"]
}