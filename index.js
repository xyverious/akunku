const Eris = require("eris");

// Replace TOKEN with your bot account's token
const bot = new Eris("NzM5Mzk5NTk3NTU3ODA5MjEy.Gx8yOp.t2P8_oUV6Q3r8LA0-pD6wMzTlanA_T7AQKZsu8");

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.connect()
