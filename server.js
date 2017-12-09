// Rudy's Portfolio

// Dependencies ==========================================================
var express    = require('express');
var exphbs     = require('express-handlebars')
var path 	     = require('path')

var app        = express(); // Set up the express app
var PORT       = process.env.PORT || 3000;

// Setup static directory
app.use(express.static(path.resolve(__dirname, "app/public")));

//For Handlebars
app.set('views', path.resolve(__dirname, 'app/views'))
app.set("view engine", "hbs"); // Setup Handlebars.
app.engine("hbs", exphbs({
  defaultLayout: "main.hbs",
  layoutsDir: path.resolve(__dirname, 'app/views/layouts'),
  partialsDir: path.resolve(__dirname, 'app/views/partials'),
  extname: ".hbs"
}));

// Routes ==========================================================
require(path.join(__dirname, '/app/routes/html-routes.js'))(app);

// Run App ==========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
