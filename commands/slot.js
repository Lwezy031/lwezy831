const slotItems = [":grapes:", ":pancakes:", ":watermelon:", ":green_apple:", ":gem:", ":strawberry:", ":cherries:"];
const db = require("quick.db");
const Discord = require('discord.js');
const ewing = require('../ewingconfig.json')
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(ewing.prefix))return;  
    let user = message.author;
    let moneydb = await db.fetch(`para_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTitle(`Root Slot Machine's`)
    .setFooter(ewing.altyazi)
    .setDescription(`**Sende olmayan parayımı yatırmaya calisiyorsun!**`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTitle(`Root Slot Machine's`)
    .setFooter(ewing.altyazi)
    .setDescription(`**Bir miktar belirt!**`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setTitle(`Root Slot Machine's`)
            .setFooter(ewing.altyazi)
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYEYY \`${money}\` ${ewing.paraBirimi} kazandın`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed1)
        db.add(`para_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setTitle(`Root Slot Machine's`)
            .setFooter(ewing.altyazi)
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nOOF \`${money}\` ${ewing.paraBirimi} kaybettin`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed)
        db.subtract(`para_${message.guild.id}_${user.id}`, money)
    }

}
  
  module.exports.help = {
    name:"slot",
    aliases: ["slots","sl"]
  }