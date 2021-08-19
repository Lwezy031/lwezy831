const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("ms");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(ewing.prefix))return;

    let user = message.author;
    let author = await db.fetch(`calis_${message.guild.id}_${user.id}`)

    //------Saniyeyi değiştire bilirsin (5s) => 5 saniye ya da (10m) => 10 dakika şeklinde
    let timeout = ms('5s');
    //------Saniyeyi değiştire bilirsin (5s) => 5 saniye ya da (10m) => 10 dakika şeklinde
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**Hey dostum yavaş her \`5\` saniyede 1 çalışabilirsin beklemelisin birazcık.**`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programlama','Çalçıpancılık','Halı Döşemeci','Mimar','Aşçı','Mekanik','Asfaltçı','Kaçakçı','Dövmeci','Muhasebeci','Şöför','Müzisyen','Sokak Sanatçısı','Çöpçü']

        let result = Math.floor((Math.random() * replies.length));
        let vip = await db.fetch(`vip_${user.id}`)
        if(vip === true) amount = Math.floor(Math.random() * ewing.maxParaVerme.calismaVIP) + 1;
        if (vip === null) amount = Math.floor(Math.random() * ewing.maxParaVerme.calisma) + 1
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle(message.author.tag)
        .setFooter(ewing.altYazi)
        .setDescription(`\`${replies[result]}\` **Olarak çalıştın ve karşılığında \`${amount}\` ${ewing.paraBirimi} kazandın!**`);
        message.channel.send(embed1)
        
        db.add(`para_${message.guild.id}_${user.id}`, amount)
        db.set(`calis_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"çalış",
  aliases: ["wr"]
}
