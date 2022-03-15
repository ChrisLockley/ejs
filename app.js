//run npm init
//npm i express
//in your package.json, change "main": "index.js" to "main": "app.js"
//create a basic server using const express, app.get, and app.listen
//use res.send to send "Welcome"

const express = require('express');
const appp = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("homepage.ejs");
});

app.get("/game/:gameTitle", function(req, res) {
    const title = req.params.gameTitle;

    res.render("game.ejs"), {
        gameTitle: title
    };
});

app.listen(port, function() {
    console.log("Website is now online");
});