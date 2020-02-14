const Discord = require("discord.js");

module.exports = class sugformat {
    constructor(){
        this.name = 'makesuggestion',
        this.alias = ['makesuggest'],
        this.usage = 'makesuggestion'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === '481277260561907712')
    embed.setTitle('How to Make a Game or Discord Suggestion')
    embed.setColor("C60505")
    embed.setDescription('Want to share your suggestions for Shadow Arena or the Discord server? 🙋‍♀️🙋‍♂️\n \n`FOR GAME SUGGESTIONS`: type **!game <explain your suggestion>** in this channel to make a suggestion about the game.\n \n`FOR DISCORD SUGGESTIONS`: type **!discord <explain your suggestion>** in this channel to submit your idea.\n \nGame suggestions wil be redirected to <#667877610361061406>.\n Discord suggestions will be redirected to <#667877637448007710>.')
    embed.setFooter('Spamming this feature goes against the Code of Conduct and penalties may ensue. Do not use this feature for anything other than submitting suggestions.')

    message.channel.send(embed) 
    message.delete();
    }
}