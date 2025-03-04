//run npm init
//npm i express
//in your package.json, change "main": "index.js" to "main": "app.js"
//create a basic server using const express, app.get, and app.listen
//use res.send to send "Welcome"

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs');

app.get('/', function(req, res) {
    res.render("homepage.ejs");
});

app.get("/game/:gameTitle", function(req, res) {
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;

    res.render("game.ejs"), {
        gameTitle: title,
        gameCreator: creator
    };
});

app.get("/gamelist", function(req, res) {
    const games = [
        {title: 'Fortnite', creator: 'Epic Games'},
        {title: '', creator: 'Splash Damage'},
        {title: '', creator: 'EA'},
        {title: '', creator: 'EA'}
    ]

    res.render("gamelist.ejs", {
        gameList: games
    });
});

app.set('view engine', 'ejs');

app.listen(port, function() {
    console.log("Website is now online");
});