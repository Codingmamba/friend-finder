var friend = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friend);
 });

console.log("Hurray");

  app.post("/api/friends", function(req, res) {
    friend.push(req.body);
      res.json(true);
    
  });

}