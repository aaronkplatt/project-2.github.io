var db = require("../models");
module.exports = function(app) {
  // GET route for getting all users, with highscores for every game they've played
  app.get("/api/users", function(request, response) {
    db.User.findAll({}).then(function(dbUser) {
      response.json(dbUser);
    });
  });
  app.get("/api/users/sessionID", function(request, response) {
    // console.log("/api/users/sessionID called");
    let id;
    // console.log(`db keys ${Object.keys(db)}`);
    db.User.findAll({}).then(function(dbUser) {
      const table = JSON.parse(JSON.stringify(dbUser));
      const current_username = request.session.username;
      // console.log(current_username);
      table.forEach(user => {
        // console.log(`compare ${user.name},${current_username}`);
        if (user.name === current_username) id = user.id;
      });
      // console.log(`id: ${id}`);
      response.json(id);
    });
  });
  // GET route for getting all high scores, from every game, associated with a specific user
  app.get("/api/users/:users_id", function(request, response) {
    db.User.findOne({
      where: {
        id: request.params.id
      },
      include: [db.Score]
    }).then(function(dbUser) {
      response.json(dbUser);
    });
  });
  // GET route for getting all comments a user has made for a specific game?
  // GET route for getting all comments a user has made for all games they've completed?
  // POST route for adding a new user
  app.post("/api/users", function(request, response) {
    db.User.create(request.body).then(function(dbUser) {
      response.json(dbUser);
    })
  });
  // DELETE route to remove an existing user
  app.delete("/api/users/:users_id", function(request, response) {
    db.User.destroy({
      where: {
        id: request.params.id
      }
    }).then(function(dbUser) {
      response.json(dbUser);
    });
  });
};