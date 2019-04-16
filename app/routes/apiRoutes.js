// note to TA - GET route added, need to add POST route and compatibility calculation logic.

// Add friends data source
var path = require("path");
var friendsData = require("../data/friends.js");

// routes

module.exports = function(app) {
  // API GET request to access friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // A POST route to push data
  app.post("/api/friends", function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var tallyArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      tallyArray.push(parseInt(req.body.tally[i]));
    }
    newFriend.tally = tallyArray;

    var tallyComparisionArray = [];
    for (var i = 0; i < friendsData.length; i++) {
      var currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        currentComparison += Math.abs(
          newFriend.scores[j] - friendsData[i].scores[j]
        );
      }

      tallyComparisionArray.push(currentComparison);
    }

    var bestMatchPosition = 0;
    for (var i = 1; i < scoreComparisionArray.length; i++) {
      if (
        scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]
      ) {
        bestMatchPosition = i;
      }
    }
    var bestMatch = friendsData[bestMatchPosition];

    res.json(bestMatch);

    friendsData.push(newFriend);
  });
};
