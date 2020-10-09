const path = require("path");
var db = require("../models");

module.exports = function (app) {

<<<<<<< HEAD
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../view/index.handlebars"))
    });

    app.get("/index.handlebars", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/"))
    });

    app.get("/game", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/game.handlebars"))
=======
    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        res.render("index");
    });

    // app.get("/index.handlebars", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../"))
    // });

    app.get("/games", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/game.handlebars"));
    });

    app.post("/games", function (req, res) {
        console.log("POST request req.body", req.body);
        userInfo(req.body)
            .then(function (result) {
                console.log(result.affectedRows + " " + `${request.body.name}` + " inserted!");
                res.render("game");
            }).catch(function (error) {
                console.log("Inside of catch from username POST: " + error);
            });
>>>>>>> 590b8aecf12e6c0b91106479dbc92674f7e32bfa
    });

    // inserting new username and passwords:
    function userInfo(bodyObj) {
        return new Promise(function (resolve, reject) {
            let insertMySQL = "INSERT INTO users (name, password) VALUES (?, ?)"
            connection.query(
                insertMySQL,
                [bodyObj.name, bodyObj.password],
                function (error, data) {
                    if (error) reject(error);
                    resolve(data)
                });
        });
    };

} 