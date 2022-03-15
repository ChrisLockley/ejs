//run npm init
//npm i express
//in your package.json, change "main": "index.js" to "main": "app.js"
//create a basic server using const express, app.get, and app.listen
//use res.send to send "Welcome"

const express = require('express');
const appp = express();

let ejs = require('ejs');

appp.get('/', function(req, res) {
    res.render("homepage.ejs");
})

appp.get("/game", function(req, res) {
    res.render("game.ejs");
})

appp.set('view engine', 'ejs');

appp.listen("3000", function() {
    console.log("Website is now online");
})