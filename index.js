const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js')
const { dashboard } = require('./Web/index')
const { loadCommands } = require('./Handlers/commands')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
require("dotenv").config();

client.commands = new Collection()

function load(){
    client.login("place_your_token_here")
    loadCommands(client)
    dashboard(client)
    return console.log(`logged in into Arktos`)
}

load()