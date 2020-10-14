const path = require("path");
const db = require("../models");
// const express = require("express");
module.exports = function(app) {
  // Route for rendering the index page for the client
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    res.render("index");
  });
  // Route for rendering the games page for the client
  app.get("/games", function(req, res) {
    res.render("game");
  });
  // Route for rendering the play cobra page for the client
  app.get("/playCobra", function(req, res) {
    if (req.session.username === null) res.redirect('/');
    res.render("playCobra");
  });
  // Route for rendering the play flappy page for the client
  app.get("/playFlappyBird", function(req, res) {
    if (req.session.username === null) res.redirect('/');
    res.render("playFlappyBird");
  });
  // Route for rendering the play ping page for the client
  app.get("/playPingPong", function(req, res) {
    if (req.session.username === null) res.redirect('/');
    res.render("playPingPong");
  });
  // Route for getting username to be used in game.handlebars
  app.get("/api/users", function(req, res) {
    console.log("req.parmas: \n", req.params);
    db.User.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Score]
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });
  // Route for posting new user data to be used in database
  app.post("/games", async function(req, res) {
    console.log("POST request req.body \n", req.body);
    let dbUserData = {
      name: req.body.userName,
      password: req.body.password
    };
    // console.log(dbUserData.name);
    req.session.username = dbUserData.name;
    let userObj = await db.User.create(dbUserData).then(function(dbUserData) {
      // console.log("What .then() of db.User is being passed: \n", dbUserData);
      // res.json(dbUserData); //shows new data in browser
      res.render("game", { username: req.session.username });
      return dbUserData.dataValues;
    }).catch(function(error) {
      console.log("Inside of catch from userinfo POST: \n", error);
      // res.status(401).json(error);
    });
    console.log("This is the User Obj: \n", userObj);
  });
  app.get("/cobra", function(req, res) {
    console.log(req.session.username);
    res.sendFile(path.join(__dirname, "../games/snake/snake.html"));
  });
  app.get("/flappy-bird", function(req, res) {
    res.sendFile(path.join(__dirname, "../games/Flappy_Bird/index.html"));
  });
  app.get("/ping-pong", function(req, res) {
    res.sendFile(path.join(__dirname, "../games/Ping_Pong/index.html"));
  });
}