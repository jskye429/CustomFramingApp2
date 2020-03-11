const proxy = require("http-proxy-middleware");
const express = require("express");
const app = express.Router()

module.exports = function(app) {
  app.use(
    proxy(["mongodb://whitestudioframes2020:studio2020@ds033797.mlab.com:33797/heroku_5875wdc2", "/api/cart", "/api/frames", "/api/cart"], { target: "http://localhost:5000" })
  );
};

