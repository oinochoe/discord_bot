const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
});

client.login(token);