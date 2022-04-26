client.on('ready', () => {
    console.log('pret !')
    setInterval(changeColor, config.speed)
    client.user.setActivity("%help", {
        type: "WATCHING"
    });
});
