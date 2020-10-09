// **************************************************************
// We want to use this file to:

// Offer a set of routes for displaying and saving data to the db
// GET view high scores from db for any assortment of games
// POST high scores to our website
// PUT update high scores if the user beats their previous score 
// DELETE high scores if the user doesn't want to keep it 
// **************************************************************

// Dependencies
// ===============================================================

// Requirering our models
var db = require("../models");

// Routes 
// ===============================================================
module.exports = function (app) {

    // GET route for getting all users, with highscores for every game they've played
    app.get("/api/users", function (request, response) {
        db.User.findAll({}).then(function (dbUser) {
            response.json(dbUser);
        });
    });

    // GET route for getting all high scores, from every game, associated with a specific user
    app.get("/api/users/:users_id", function (request, response) {
        db.User.findOne({
            where: {
                id: request.params.id
            },
            include: [db.Score]
        }).then(function (dbUser) {
            response.json(dbUser);
        });
    });

    // GET route for getting all comments a user has made for a specific game?

    // GET route for getting all comments a user has made for all games they've completed?

    // POST route for adding a new user
    app.post("/api/users", function (request, response) {
        db.User.create(request.body).then(function (dbUser) {
            response.json(dbUser);
        })
    });



    // DELETE route to remove an existing user
    app.delete("/api/users/:users_id", function (request, response) {
        db.User.destroy({
            where: {
                id: request.params.id
            }
        }).then(function (dbUser) {
            response.json(dbUser);
        });
    });
};
