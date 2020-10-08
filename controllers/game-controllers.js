var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
      res.render("index");
});

router.get("/games", function(req, res) {
      res.render("game");
});


module.exports = router;