const path = require("path");
const db = require("../models");
module.exports = function(app, express) {
  // Route for rendering the index page for the client
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    res.render("index");
  });
  // Route for rendering the games page for the client
  app.get("/games", async function(req, res) {
    let flappy_bird_score, snake_score, ping_pong_score;
    let user_table;
    await db.User.findAll({}).then(function(dbRaw) {
      user_table = JSON.parse(JSON.stringify(dbRaw));
    });
    await db.Score.findAll({ where: { name: "snake" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw));
      score_table.sort((personA, personB) => personA.score < personB.score);
      snake_score = score_table.slice(0, 5);
      snake_score = snake_score.map(row => {
        return { username: user_table[row.UserId].name, score: row.score }; //objects cannot be returned unless using the return keyword in the ()=>{}
      });
    });
    await db.Score.findAll({ where: { name: "flappy_bird" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw));
      score_table.sort((personA, personB) => personA.score < personB.score);
      flappy_bird_score = score_table.slice(0, 5);
      flappy_bird_score = flappy_bird_score.map(row => {
        return { username: user_table[row.UserId].name, score: row.score };
      });
    });
    await db.Score.findAll({ where: { name: "ping_pong" } }).then(function(dbRaw) {
      let score_table = JSON.parse(JSON.stringify(dbRaw));
      score_table.sort((personA, personB) => personA.score < personB.score);
      ping_pong_score = score_table.slice(0, 5);
      ping_pong_score = ping_pong_score.map(row => {
        return { username: user_table[row.UserId].name, score: row.score };
      });
    });
    let obj = {
      flappy_bird_score: flappy_bird_score,
      snake_score: snake_score,
      ping_pong_score: ping_pong_score
    };
    // console.log(obj);
    res.render("game", obj);
  });
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