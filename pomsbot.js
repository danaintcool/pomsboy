const Discord = require("discord.js");
const bot = new Discord.Client();
var fs = require('fs');

bot.on("ready", function()
{
  console.log("hey i work now");

});

bot.on("message", msg => {

    let prefix = "!";

    if(!msg.content.startsWith(prefix)) return;
    if(msg.author.bot) return;

if(msg.content.startsWith(prefix + "pom")) {
  var pom = fs.readFileSync('database.txt').toString().split("{}");
  var randPom = pom[Math.floor(Math.random() * pom.length)];
}

if(msg.content.startsWith(prefix + "porn")) {
     msg.channel.sendMessage("its !pom you dumbo")
    }
if(msg.content.startsWith(prefix + "pomhelp")) {
     msg.channel.sendMessage("```hi! this bot was made by @danaaintcool on twitter kinda i guess. \n folks that made this happen r dogman#2117, wiiblob#0071 n JA RULE \n use !pom for a pom pic```")
    }
	
	 if(msg.content.startsWith(prefix + "gay")) {
     msg.channel.sendMessage("ye!")
	 }
	  if(msg.content.startsWith(prefix + "fast")) {
     msg.channel.sendMessage(":pom:")
	 }
	 if(msg.content.startsWith(prefix + "adi")) {
     msg.channel.sendMessage("bun!")
	 }
	  if(msg.content.startsWith(prefix + "bun")) {
     msg.channel.sendMessage("dad's favorite latino adi bunny <3")
	 }
	  if(msg.content.startsWith(prefix + "dad")) {
     msg.channel.sendMessage("dan!")
	 }
	  if(msg.content.startsWith(prefix + "zub")) {
     msg.channel.sendMessage("more like,,,,,,,,,,,,,,,,,,,,,unfunny,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
	 }
	 
    var POMS = {
"!pom":randPom
}
if (POMS[msg.content]){
  msg.channel.sendMessage(POMS[msg.content]);
}

});


bot.login("MjY2MzUwMDkwODU4Mzk3Njk2.C1kYrA.QNq_LMN1jP8NigOSxjIiWUa6M90");
