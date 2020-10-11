// Dependencies
var express = require("express");
require("dotenv").config();
var path = require('path');
// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Reqquiring our models for syncing
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use("/public", express.static("public"));

app.use("/games", express.static("games"));
// app.use("/games/snake", express.static("snake"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var gameControllerRoutes = require("./controllers/game-controllers.js");
require("./routes/html-routes.js")(app);
//Uncommend line 23 when you get the route
// app.use(gameControllerRoutes);
// app.use(htmlRoutes);

// Syncing our database and looging message to the user upon success
db.sequelize.sync({force : false}).then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
