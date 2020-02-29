const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//MERN test
app.use(cors());
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/studioFrames", {useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database  connection to StudioFrames established successfully");
})

// app.use(routes);
const apiRoutes = express.Router();

apiRoutes.route('/').get(function(req, res) {
  Frames.find(function(err, frames) {
      if (err) {
          console.log(err);
      } else {
          res.json(frames);
      }
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
