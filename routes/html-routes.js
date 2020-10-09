const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../view/index.handlebars"))
    });

    app.get("/index.handlebars", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/"))
    });

    app.get("/game", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/game.handlebars"))
    });

   
} 