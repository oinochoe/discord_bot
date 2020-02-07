const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  // message not srtart with '!' prefix .. then return
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(`${prefix}자기야 잘자`)) {
    message.channel.send('윽 토하겠네.');
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.');
  } else if (message.content === `${prefix}server`) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer creator: ${message.guild.createdAt}\nServer Region: ${message.guild.region}`,
    );
  } else if (message.content === `${prefix}user-info`) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`,
    );
  } else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`,
      );
    }
    /* else if (args[0] === 'foo') {
      return message.channel.send('bar');
    } */
    /* message.channel.send(`First argument: ${args[0]}`); */
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === 'kick') {
    const taggedUser = message.mentions.users.first();
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }
    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
});

client.login(token);
