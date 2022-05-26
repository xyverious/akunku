const Eris = require("eris");

// Replace TOKEN with your bot account's token
const bot = new Eris("NDkxMDU0MTMyNTQzNzUwMTQ2.GO8DYx.c_y1xr3Iw2BJ9RLHMqH0vvpwduREzU8shGrnf8");

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.connect()
