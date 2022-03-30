const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message", msg => {
  if (msg.content === "creeper" || msg.content === "Creeper") {
      msg.reply("aww man!");
    }
  })