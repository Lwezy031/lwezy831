const Discord = require('discord.js')
const db = require('quick.db')
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(ewing.prefix))return;  
    
    let user = message.author;

    if(args[0] == 'nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Satıcak durum'da bir nike ayakkabı bulunmamaktadır.**`);

        let nikeses = await db.fetch(`nike_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.subtract(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Miss gibi Nike ayakkabıları \`${ewing.satisFiyat.nike}\` ${ewing.paraBirimi}'ye sattın.**`);

        db.add(`para_${message.guild.id}_${user.id}`, ewing.satsiFiyat.nike)
        message.channel.send(Embed3)
    } else if(args[0] == 'araba') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Satıcak durum'da bir araba bulunmamaktadır.**`);

       let cars = await db.fetch(`araba_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`araba_${message.guild.id}_${user.id}`)
        db.subtract(`araba_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Başarılı bir şekilde arabanı \`${ewing.satisFiyat.araba}\` ${ewing.paraBirimi}'ye sattın.**`);

        db.add(`para_${message.guild.id}_${user.id}`, ewing.satsiFiyat.araba)
        message.channel.send(Embed3)
    } else if(args[0] == 'ev') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Satıcak durum'da bir evin bulunmamaktadır.**`);

        let houses = await db.fetch(`ev_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`ev_${message.guild.id}_${user.id}`)
        db.subtract(`ev_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setFooter(ewing.altYazi)
        .setDescription(`**Başarılı bir şekilde evini \`${ewing.satisFiyat.ev}\` ${ewing.paraBirimi}'ye sattın.**`);

        db.add(`para_${message.guild.id}_${user.id}`, ewing.satsiFiyat.ev)
        message.channel.send(Embed3)
    };

}
  
  module.exports.help = {
    name:"sat",
    aliases: ["sell"]
  }