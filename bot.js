const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
        GatewayIntentBits.GuildMembers
], });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    if (/[\w\s]+? [\w\s]+?. [\w\s]+?/.test(member.displayName)) {
        await member.ban();
        console.log(`Banned ${member.displayName} for suspicious username.`);
    }
})

client.login("MTAyMDA5NjgxNjg1Njk2NTEyMA.GF6DtR.5Lz--aTSmxQjn93Zuj2Ov0hF94xfSzWvO4D488");