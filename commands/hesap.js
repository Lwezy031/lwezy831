const Discord = require("discord.js");
const db = require("quick.db");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`para_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`banka_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'Yok'
    if(vip === true) vip = 'Var'

  let shoes = await db.fetch(`nike_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`araba_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`ev_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setThumbnail(message.author.avatarURL({size: 4096, dynamic: true}))
  .setFooter("Coded by Root")
  .setDescription(`**${user} Kullanıcın Profili**\n\nCebinde: \`${money}\` ${ewing.paraBirimi} var\nBanka'da: \`${bank}\` ${ewing.paraBirimi} var\nRicher'i varmı: \`${vip}\`\n\n**Envanter**\n\nNike'ler: \`${shoes}\`\nArabalar: \`${newcar}\` \nEv'ler: \`${newhouse}\``);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["profil","hesap"]
}