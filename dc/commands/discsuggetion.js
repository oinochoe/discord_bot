const Discord = require("discord.js");
module.exports = class Suggestion {
  constructor() {
    (this.name = "discordsuggestion"),
      (this.alias = ["discord", "DISCORD"]),
      (this.usage = "discordsuggestion");
  }
  run(bot, message, args) {
    let embed = new Discord.RichEmbed();
    var command = args[0];
    var suggestion = args.slice(1).join(" ");
    embed.setTitle("Discord Suggestion");
    embed.setColor("E2D056");
    embed.setDescription(`${suggestion}`);
    embed.addField("Suggestion By", `<@${message.author.id}>`);
    let checker = message.content.split(" ");
    if (message.guild.id === "667818569739927584") {
      if (message.channel.id === "669735816674803722") {
        if (checker.length !== 1) {
          bot.channels
            .get("667877637448007710")
            .send(embed)
            .then(async x => {
              await x.react("👍");
              await x.react("👎");
            });
        }
      }
    }
    message.delete();
  }
};
