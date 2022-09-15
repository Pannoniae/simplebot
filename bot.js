const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    if ("[\\w\\s]+? [\\w\\s]+?. [\\w\\s]+?".match(member.displayName)) {
        await member.ban();
        console.log(`Banned ${member.displayName} for suspicious username.`);
    }
})

client.login("TOKEN");