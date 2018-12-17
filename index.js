const Discord = require("discord.js");
const v1 = new Discord.Client;
const v2 = new Discord.Client;
const v3 = new Discord.Client;
///const v4 = new Discord.Client; ....v5.v6.v7.v8

v1.on('message', message => {
    if(message.content.startsWith("wa")) {
if(argresult){
           message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
          bot.user.setActivity(argresult, {type:'WATCHING'});
        } else 
        if(!argresult) {
        message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
        }
      message.delete(3000);
    }  
});


v2.on('message', message => {
    if(message.content.startsWith("wa")) {

    if(argresult){
               message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
              bot.user.setActivity(argresult, {type:'WATCHING'});
            } else 
            if(!argresult) {
            message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
            }
          
            message.delete(3000);
        }
        
    });

    v3.on('message', message => {
        if(message.content.startsWith("wa")) {

        if(argresult){
                   message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
                  bot.user.setActivity(argresult, {type:'WATCHING'});
                } else 
                if(!argresult) {
                message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
                }
              message.delete(3000);
            
            }
        });

        /*v4.on('message', message => {
            if(message.content.startsWith("wa")) {
        if(argresult){
                   message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
                  bot.user.setActivity(argresult, {type:'WATCHING'});
                } else 
                if(!argresult) {
                message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
                }
              message.delete(3000);
            }  
        });...v5.v6.v7.v8*/


v1.login("token");
v2.login("token");
v3.login("token");
///v4.login("token");...v5.v6.v7.v8
