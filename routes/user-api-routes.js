var db = require("../models");
module.exports = function(app) {
  // GET route for getting all users, with highscores for every game they've played
  app.get("/api/users", function(request, response) {
    db.User.findAll({}).then(function(dbUser) {
      response.json(dbUser);
    });
  });
  app.get("/api/users/sessionID", function(request, response) {
    db.User.findAll({ where: { name: request.session.username } }).then(function(dbUser) {
      const row = JSON.parse(JSON.stringify(dbUser));
      response.json(row.id);
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