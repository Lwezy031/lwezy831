const Discord = require('discord.js')
const db = require('quick.db')
const ewinga = require('../ewingroller.json')
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(ewing.prefix))return;   

    let user = message.author;

    let author = db.fetch(`para_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTitle(message.author.tag)
    .setFooter(ewing.altyazi)
    .setDescription(`**VIP Rolünü almak için \`${ewing.satınalFiyat.vip}\` ${ewing.paraBirimi} gerekiyor.**`);
    if (args[0] == 'vip') {
        if (author < ewing.satınalFiyat.vip) return message.channel.send(Embed)
        
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Başarılı bir şekilde \`${ewing.satınalFiyat.vip}\` ${ewing.paraBirimi}'ye Richer Rolünü satın aldın!**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, ewing.satınalFiyat.vip)
        message.channel.send(Embed2)
        message.member.roles.add(ewinga.richer)
        
    } else if(args[0] == 'nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Nike ayakkabısını almak için \`${ewing.satınalFiyat.nike}\` ${ewing.paraBirimi}'ye Ihtiyacın var.**`);

        if (author < ewing.satınalFiyat.nike) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Terrr Temiz Nike ayakkabısı satın aldın hayırlı olsun brom**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, ewing.satınalFiyat.nike)
        message.channel.send(Embed3)
    } else if(args[0] == 'araba') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Araba almak için \`${ewing.satınalFiyat.araba}\` ${ewing.paraBirimi}'ye ihtiyacın var.**`);

        if (author < ewing.satınalFiyat.araba) return message.channel.send(Embed2)
       
        db.fetch(`araba_${message.guild.id}_${user.id}`)
        db.add(`araba_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Başarıyla bir araba sahibi oldun hayırlı olsun!**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, ewing.satınalFiyat.araba)
        message.channel.send(Embed3)
    } else if(args[0] == 'ev') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Ev almak için \`${ewing.satınalFiyat.ev}\` ${ewing.paraBirimi}'ye ihtiyacın var.**`);

        if (author < ewing.satınalFiyat.ev) return message.channel.send(Embed2)
       
        db.fetch(`ev_${message.guild.id}_${user.id}`)
        db.add(`ev_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setColor("#0x7289UA")
        .setFooter(ewing.altyazi)
        .setDescription(`**Başarlı bir şekilde kulübe satın aldın hayırlı olsun it.**`);
        db.subtract(`para_${message.guild.id}_${user.id}`, ewing.satınalFiyat.ev)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(ewing.altyazi)
        .setDescription(`**Herhangi bir item'in adını yaz Almak istediğinin Örnek: \`${ewing.prefix}satınal ev\`**`)
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"satinal",
    aliases: ["satınal"]
  }