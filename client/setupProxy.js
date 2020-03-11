const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api/users", "/api/frames", "/api/cart"], { target: "http://localhost:5000" })
  );
};