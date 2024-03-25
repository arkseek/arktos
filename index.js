const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js')
const { dashboard } = require('./Web/index')
const client = new Client({ intents: [GatewayIntentBits.Guilds]})
require("dotenv").config();

client.commands = new Collection()

function load(){
    dashboard(client)
    return console.log(`logged in into Arktos`)
}

client.login("place_token_here")


load()