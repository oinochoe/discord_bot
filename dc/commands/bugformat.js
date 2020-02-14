const Discord = require("discord.js");

module.exports = class bugformat {
  constructor() {
    (this.name = "bugreporthowto"),
      (this.alias = ["bugreportinit"]),
      (this.usage = "bugreporthowto");
  }

  run(bot, message, args) {
    let embed = new Discord.RichEmbed();
    if (message.author.id === "657485134370570241")
      embed.setTitle(
        "Found a bug in the game? 🛠️ \nUse the template below to submit a report in #bug-report."
      );
    embed.setColor("ec1920");
    embed.setDescription(
      "**Tell us:**\n ● When the issue occurred: \n ● Your server (NA/EU/ASIA/RU): \n ● A detailed description of bug (the more info we get, the better): \n ● What hero were you playing when the bug occurred? \n ● Screenshots or videos that display the bug allow us to help you faster. Please attach any images or videos to your message.\n \n**CONTACT SHADOW ARENA SUPPORT**\n If you would like to submit a ticket to our Support team OR if you have an accounts/purchasing issue, submit a ticket here: https://support.pearlabyss.com/Support."
    );
    embed.setFooter(
      "Following the bug report template above helps us to assess your bugs and solve issues as quickly as possible."
    );
    embed.setImage("https://via.placeholder.com/150");

    message.channel.send(embed);
    message.delete();
  }
};
