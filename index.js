const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("redi!")
    client.user.setActivity("Dia Bersamanya", {
        type: "WATCHING"
    });
});

client.login("NzM5Mzk5NTk3NTU3ODA5MjEy.Gx8yOp.t2P8_oUV6Q3r8LA0-pD6wMzTlanA_T7AQKZsu8");
