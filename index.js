const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("action!");
});

client.on("message", message => {
  if (message.content === "섀도우아레나정보") {
    message.reply(
      "아직도 몰라? 섀도우 아레나 해봤냐? 엄청 재미있다. 칼질하고 막 수리검 날리고 어! 정말 짱이야"
    );
  } else if (message.content === "그래?") {
    message.reply("그렇다니까? 한번 해봐 빠져들껄? ");
  }
});

client.login("Njc0NjM1MjcwNzg3Njk0NjQy.Xjz88A.S6GFJ8rlH4N6yspfS1_p_i-11iE");
