const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

var obj = require("hannigram.json");
// Set the prefix
let prefix = ".";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
});
client.on('message', msg => {

    if (msg.content.startsWith(prefix + 'sfwhannigram')){
    
        var answers = [
            "http://wisesnail.tumblr.com/post/170763062720/c%C3%A8-qualcosa-dentro-di-me-che-%C3%A8-sbagliato-e",
            "http://camilleflyingrotten.tumblr.com/post/169119382191/i-was-like-how-could-i-associate-my-love-for",
            "https://happy-cannibal-noises.tumblr.com/post/170401356087/these-little-psychopaths-just-warm-my-heart",
            "http://sheep-in-clouds.tumblr.com/post/171672225887/folie-%C3%A0-deux-rb",
            "https://le-wendigogo.tumblr.com/post/172615132182/look-at-the-life-i-could-have-spun-for-you-will",
            "http://embulalia.tumblr.com/post/171037516961/i-think-about-that-face-hole-will-sustained-quite",
            "http://hannibalvector.tumblr.com/post/171773234987",
            "http://beatricenius.tumblr.com/post/171164921728/hannibal-do-you-believe-you-could-change-me-the",
            "https://mathurinqs.tumblr.com/post/170603235435/hannibal-dojin-cover",
            "http://treacle-a.tumblr.com/post/170617637386/is-this-wrong-it-somehow-seems-so-right"
          ]
          
          var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
          
          msg.channel.send(randomAnswer);
    }
    
    });
    client.on('message', msg => {

        if (msg.content.startsWith(prefix + 'nsfwhannigram')){
        
            var answers = [
                "http://amarriageoftrueminds.tumblr.com/post/161837915948/hannibal-and-will-as-gladiators-bookmark",
                "http://reapersun.tumblr.com/post/172592596372/support-me-on-patreon-im-filling-a-bunch-of",
                "http://unorthodoxtherapy.tumblr.com/post/157258757826/happy-valentines-day",
                "http://felixfellow.tumblr.com/post/157535856137/i-would-remember-this-time",
                "http://felixfellow.tumblr.com/post/157535856137/i-would-remember-this-time",
                "https://toni-of-the-trees.tumblr.com/post/166213104307/love-like-woe-just-domestic-nsfw-ish-hannigram-3",
                "http://rrimu.tumblr.com/post/159019509261/hugh-said-fanartists-should-draw-his-legs-more",
                "http://felixfellow.tumblr.com/post/155315325657/first-doodle-of-2017-and-first-hannibal-fanart",
                "https://theseavoices.tumblr.com/post/158489190566/happy-birthday-weconqueratdawn-i-didnt-manage",
                "https://carrioncrowned.tumblr.com/post/161367168131/1k-giveaway-second-price-make-it-hurt-will"
              ]
              
              var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
              
              msg.channel.send(randomAnswer);
        }
        
        });
client.login(process.env.BOT_TOKEN);
