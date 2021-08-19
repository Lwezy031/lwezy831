const Discord = require("discord.js");
const db = require("quick.db");
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(ewing.prefix))return;  
  const ownerID = ewing.sahipID;
  if(message.author.id !== ownerID) return message.channel.send(`Hey! sahibim değilsin sadece sahibim kullanabilir bu komutu.`)

  let user = message.mentions.members.first() || message.author;
    if (isNaN(args[1])) return message.channel.send('Hey! bir miktar belirtmen gerek.')
    db.subtract(`para_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`para_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`başarılı bir şekilde \`${args[1]}\` ${ewing.paraBirimi} kaldırdım\n\nYeni bakiyesi: \`${bal}\` ${ewing.paraBirimi}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"kaldır",
  aliases: ["remove","rm"]
}
