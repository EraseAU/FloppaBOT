const {Client, Intents} = require('discord.js')
require("dotenv").config()
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,   
    ]
})

client.once('ready',async() => {

    console.log(`Logged in as ${client.user.tag}`)

}) 

// client.on('messageCreate', async (msg) => {

    


// })

client.login(process.env.TOKEN)


