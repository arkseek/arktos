const express = require('express')
const app = express()
const path = require('path')
require("dotenv").config()

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'))

//! Authentication


//! URLS

function dashboard(client){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + 'views/index.html'))
    })

    app.listen(8080, () => {
        console.log('Started server on port 8080.')
    })
}

module.exports = { dashboard }