const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/", "/api/cart", "/api/frames", "/api/cart"], { target: "http://localhost:8081" })
  );
};

