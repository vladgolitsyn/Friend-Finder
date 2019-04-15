// note to TA - GET route added, need to add POST route and compatibility calculation logic.

// Add friends data source
var path = require("path");
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET request to access friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request to pass variables and calculate closest friend match
  //   app.post("/api/tables", function(req, res) {
  //   });
};
