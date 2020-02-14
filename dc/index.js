const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const { CommandHandler } = require("djs-commands");
const CH = new CommandHandler({
  folder: __dirname + "/commands/",
  prefix: ["!"]
});

bot.on("ready", () => {
  console.log(`${bot.user.tag} is now online!`);
});

bot.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.author.type === "bot") return;
  if (
    message.content.startsWith !== "!game" &&
    message.content.startsWith !== "!discord" &&
    message.content.startsWith !== "!GAME" &&
    message.content.startsWith !== "!DISCORD"
  ) {
    if (message.guild.id === "667818569739927584") {
      if (message.channel.id === "669735816674803722") {
        ///Deactivate this to repost bot +makesuggest

        message.delete();
      }
    }
  }
  if (message.content === "!user-info") {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  }

  let args = message.content.split(/ +/g);
  let command = args[0];
  let cmd = CH.getCommand(command);
  if (!cmd) return;
  try {
    cmd.run(bot, message, args);
  } catch (e) {
    console.log(e);
  }
});
bot.on("ready", () => {
  bot.user.setActivity("Shadow Arena 풍선을타고", { type: "WATCHING" });
});
bot.login(config.token);
