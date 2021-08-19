const Discord = require('discord.js')
const db = require('quick.db')
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;   


    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setTitle(`Para Adam Yardım Listesi [Prefix ${ewing.prefix}`)
    .addField("Ekonomi Komutları", "`çalış` `dilen` `transfer` `bakiye` `hesap` `çekme` `yatırma` `günlük` `haftalık` `market` `satınal` `sat`")
    .addField("Kumar Komutları", "`rulet` `slot`")
    .setFooter(ewing.altYazi)
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

module.exports.help = {
  name:"yardım",
  aliases: ["y"]
}