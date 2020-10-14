const path = require("path");
const db = require("../models");
module.exports = function(app, express) {
  // Route for rendering the index page for the client
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Route for rendering the games page for the client
  // Route for rendering the signUp page for the client
  app.get("/signUp", function(req, res) {
    res.render("signUp");
  });
  // Route for rendering the play Snake page for the client
  app.get("/playSnake", function(req, res) {
    // if (req.session.username === undefined) res.redirect('/');
    res.render("playSnake");
  });
  // Route for rendering the play flappy page for the client
  app.get("/playFlappyBird", function(req, res) {
    // if (req.session.username === undefined) res.redirect('/');s
    res.render("playFlappyBird");
  });
  // Route for rendering the play ping page for the client
  app.get("/playPingPong", function(req, res) {
    if (req.session.username === undefined) res.redirect('/');
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
  app.post("/createUser", function(req, res) { //sign up form submission
    let userSubmission = {
      name: req.body.userName,
      password: req.body.password
    };
    db.User.create(userSubmission).then(function(dbUserData) {
      //set session before redirecting to games!
      console.log("successfuly created");
      req.session.username = userSubmission.name;
      res.redirect("/games");
    }).catch(function(error) {
      console.log("Inside of catch from userinfo POST: \n", error);
    });
  });
  app.post("/verifyUser", function(req, res) { //index calls this on form submission
    let userSubmission = {
      name: req.body.userName,
      password: req.body.password
    };
    //some sort of verification here
    //db.User.findAll()
    //set session before redirecting to games!
    req.session.username = userSubmission.name;
    res.redirect("/games");
  });
  // Route for posting new user data to be used in database
  app.get("/games", async function(req, res) {
    if (req.session.username === undefined) res.redirect("/");
    //below fetch HIGHSCORES
    let flappy_bird_score, snake_score, ping_pong_score;
    let user_table;
    await db.User.findAll({}).then(function(dbRaw) {
      user_table = JSON.parse(JSON.stringify(dbRaw));
    });
    await db.Score.findAll({ where: { name: "snake" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw)).sort((a, b) => a.score < b.score);
      snake_score = score_table.map(row => {
        return { username: user_table[row.UserId - 1].name, score: row.score };
      }).slice(0, 5);
    });
    await db.Score.findAll({ where: { name: "flappy_bird" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw)).sort((a, b) => a.score < b.score);
      flappy_bird_score = score_table.map(row => {
        return { username: user_table[row.UserId - 1].name, score: row.score };
      }).slice(0, 5);
    });
    await db.Score.findAll({ where: { name: "ping_pong" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw)).sort((a, b) => a.score < b.score);
      ping_pong_score = score_table.map(row => {
        return { username: user_table[row.UserId - 1].name, score: row.score };
      }).slice(0, 5);
    });
    res.render("game", {
      username: req.session.username,
      flappy_bird_score: flappy_bird_score,
      snake_score: snake_score,
      ping_pong_score: ping_pong_score
    });
  });
  app.get("/snake", function(req, res) {
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