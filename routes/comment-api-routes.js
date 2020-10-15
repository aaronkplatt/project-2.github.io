// const db = require("../models")
// module.exports = function (req, res) {
//     app.get("/api/comments", function(req, res) {
//         db.Comment.findAll({
//         }).then(function(dbComment) {
//             res.json(dbComment);
//         });
//     }); 
//     app.post("/api/comments", function (req, res) {
//         db.Comment.create(req.body).then(function(dbComment) {
//             res.json(dbComment);
//         });
//     });
//     app.delete("/api/score:comments_id", function (req, res) {
//         db.Comment.destroy({
//             where: {
//                 id: req.params.comments_id
//             }
//         }).then(function(dbComment) {
//             res.json(dbComment);
//         });
//     });
// }