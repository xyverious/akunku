const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("redi!")
    client.user.setActivity("Dia Bersamanya", {
        type: "WATCHING"
    });
});

client.login("NDkxMDU0MTMyNTQzNzUwMTQ2.YmctkA.b4tktWxyDJvjKYlE-EcRrwJwacc");
