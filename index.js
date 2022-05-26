const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("redi!")
    client.user.setActivity("Dia Bersamanya", {
        type: "WATCHING"
    });
});

client.login("NDkxMDU0MTMyNTQzNzUwMTQ2.GO8DYx.c_y1xr3Iw2BJ9RLHMqH0vvpwduREzU8shGrnf8");
