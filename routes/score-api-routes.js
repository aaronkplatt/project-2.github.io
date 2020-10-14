const db = require("../models");
module.exports = function(app) {
  app.get("/api/scores", function(req, res) {
    db.Score.findAll({}).then(function(dbScore) {
      res.json(dbScore);
    });
  });
  //   app.post("/api/scores", function(req, res) {
  //     let data = {
  //       username: req.session.username,
  //     //   game_name: req.body.game_anme,
  //       score: req.body.score
  //     };
  //     db.Snake.create(data).then(function(dbScore) {
  //       res.json(dbScore);
  //     });
  //   });
  app.post("/api/submit_score", function(req, res) {
    let score_info = { name: req.body.game_name, score: req.body.sessionScore, UserId: req.body.userId };
    console.log("Score POST request req.body \n", score_info);
    db.Score.create(score_info).then(function(res, err) {
      if (err) throw err;
      console.log("display score_info: \n", score_info);
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