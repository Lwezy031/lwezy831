const Discord = require('discord.js')
const db = require('quick.db')
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription(`
    **Richer Rolu: \`${ewing.satınalFiyat.vip}\` ${ewing.paraBirimi} [${ewing.prefix}satınal richer]**
    **Hayat Stili**
    **Tertemiz Nike: \`${ewing.satınalFiyat.nike}\` ${ewing.paraBirimi} [${ewing.prefix}satınal nike]
    Araba: \`${ewing.satınalFiyat.araba}\` ${ewing.paraBirimi} [${ewing.prefix}satınal araba]
    Ev: \`${ewing.satınalFiyat.ev}\` ${ewing.paraBirimi} [${ewing.prefix}satınal ev]**`)
    .setColor("#FFFFFF")
    .setTitle(message.author.tag)
    .setFooter(ewing.altYazi)
    message.channel.send(embed)




}


module.exports.help = {
  name:"market",
  aliases: ["Market"]
}