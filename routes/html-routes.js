const path = require("path");

module.exports = function (app) {

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
        console.log(req);
        res.render("game");
        
    });

} 