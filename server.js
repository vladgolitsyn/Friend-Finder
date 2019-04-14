// Dependecies - express and route
var express = require("express");
var path = require("path");

// Create express server
var app = express();

// Set-up intial port for listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets-up required route file mapping
require(path.join(__dirname, "./app/routes/apiRoutes"))(app);
require(path.join(__dirname, "./app/routes/htmlRoutes"))(app);

// Listener which starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
