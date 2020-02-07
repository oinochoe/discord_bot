// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');
// config 세팅
const { prefix, token } = require('./config.json');
// 생성자로 client를 생성한다.
const client = new Client();

// 클라이언트가 레디되면 console.에 찍어준다.
client.once('ready', () => {
  console.log('Ready!');
});

// 멤버가 추가되면 발동한다.
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

// 클라이언트가 메세지를 하면 발동한다.
client.on('message', message => {
  // message not srtart with '!' prefix .. then return
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // args -> message 콘텐트를 slice
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'rip') {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(`${message.author},`, attachment);
  } else if (command === 'ping') {
    message.reply('Pong! `' + Math.floor(client.ping) + ' ms`');
  } else if (command.startsWith('섀도우아레나 장비목록')) {
    message.channel.send('수리검, 나쵸, 양파링');
  } else if (command.startsWith('섀도우아레나 캐릭터정보')) {
    message.channel.send('수리검을 날린다 멋있는 캐릭터지 후후 안녕하세요.');
  } else if (command === 'server') {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer creator: ${message.guild.createdAt}\nServer Region: ${message.guild.region}`,
    );
  } else if (command === 'user-info') {
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
  } else if (command === 'avatar') {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL}>`,
      );
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });

    // 재생 test.mp3
    message.channel.send(avatarList);
  } else if (command === '재생') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply('재생!');
          connection.playFile('test.mp3');
        })
        .catch(console.log);
    } else {
      message.reply('보이스채널에 없네?');
    }
  }
});

client.login(token);
