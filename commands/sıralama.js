const Discord = require('discord.js')
const db = require('quick.db')
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;  

    const embed = new Discord.MessageEmbed()
    .setTitle('Sıralamalar')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Para Sıralaması:** \`${ewing.prefix}sıralama para\`\n**Nike Sıralaması:** \`${ewing.prefix}sıralama nike\`\n**Araba Sıralaması:** \`${ewing.prefix}sıralama araba\`\n**Ev Sıralaması:** \`${ewing.prefix}sıralama ev\``)
    .setFooter(ewing.altYazi)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'para') {
      let bakiye = db.all().filter(data => data.ID.startsWith(`para`)).sort((a, b) => b.data - a.data)

      bakiye.length = 10;
  
      let finalLb = "";
      for (var i in bakiye) {
        finalLb += `**${bakiye.indexOf(bakiye[i])+1}.**     <@${bakiye[i].ID.slice(25)}> - \`${bakiye[i].data} ${ewing.paraBirimi}\`\n`;
      }
    
      

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**${message.guild.name} sunucun Para Sıralaması**\n\n${finalLb}`)
    .setColor("#FFFFFF")
    .setFooter(ewing.altYazi)
    message.channel.send(embed)



  } else if(args[0] == 'nike') {
    let nike = db.all().filter(data => data.ID.startsWith(`nike`)).sort((a, b) => b.data - a.data)
    nike.length = 10;

    let finalLb = "";
    for (var i in nike) {
      finalLb += `**${nike.indexOf(house[i])+1}.**     <@${nike[i].ID.slice(25)}> - \`${nike[i].data} Nike\`\n`;
    }

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**${ewing.altYazi} sunucun Nike Leaderboard**\n\n${finalLb}`)
    .setColor("#FFFFFF")
    .setFooter(ewing.altYazi)
    message.channel.send(embed)



  } else if(args[0] == 'araba') {
    let araba = db.all().filter(data => data.ID.startsWith(`araba`)).sort((a, b) => b.data - a.data)
    araba.length = 10;

    let finalLb = "";
    for (var i in araba) {
      finalLb += `**${araba.indexOf(araba[i])+1}.**     <@${araba[i].ID.slice(25)}> - \`${araba[i].data} Araba\`\n`;
    }

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**${message.guild.name} sunucun Araba Sıralaması**\n\n${finalLb}`)
    .setColor("#FFFFFF")
    .setFooter(ewing.altYazi)
    message.channel.send(embed)



  } else if(args[0] == 'ev') {
    let house = db.all().filter(data => data.ID.startsWith(`ev`)).sort((a, b) => b.data - a.data)
    //let mansions = db.all().filterdb.startsWith(`house_${message.guild.id}`, { sort: '.data'})
    house.length = 10;

    let finalLb = "";
    for (var i in house) {
      finalLb += `**${house.indexOf(house[i])+1}.**     <@${house[i].ID.slice(25)}> - \`${house[i].data} Ev\`\n`;
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**${message.guild.name} sunucun Ev Sıralaması**\n\n${finalLb}`)
    .setColor("#FFFFFF")
    .setFooter(ewing.altYazi)
    message.channel.send(embed)
  }

}
module.exports.help = {
  name:"sıralama",
  aliases: ["leaderboard","top"]
}