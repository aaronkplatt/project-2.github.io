const db = require("../models");
module.exports = function(app) {
  app.get("/api/scores", function(req, res) {
    db.Score.findAll({}).then(function(dbScore) {
      res.json(dbScore);
    });
  });
  app.post("/api/submit_score", function(req, res) {
    console.log("submitscore called", {
      name: req.body.game_name,
      score: req.body.sessionScore,
      UserId: req.body.userId
    });
    db.Score.create({
      name: req.body.game_name,
      score: req.body.sessionScore,
      UserId: req.body.userId
    }).then(function(res, err) {
      if (err) console.log(err);
    }); ///pass the score to db
  });
  app.delete("/api/score/:scores_id", function(req, res) {
    db.Score.destroy({
      where: {
        id: req.params.scores_id
      }
    }).then(function(dbScore) {
      res.json(dbScore);
    });
  });
}