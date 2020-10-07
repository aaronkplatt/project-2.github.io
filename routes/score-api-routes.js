const db = require("../models");

module.exports = function (app) {
    app.get("/api/scores", function(req, res) {

        db.Score.findAll({
        }).then(function(dbScore) {
            res.json(dbScore);
        });
    });

    app.post("/api/scores", function (req, res) {
        db.Score.create(req.body).then(function(dbScore) {
            res.json(dbScore);
        });
    });

    app.delete("/api/score:scores_id", function (req, res) {
        db.Score.destroy({
            where: {
                id: req.params.scores_id
            }
        }).then(function(dbScore) {
            res.json(dbScore);
        });
    });


}

