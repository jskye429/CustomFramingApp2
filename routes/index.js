const path = require("path");
const router = require("express").Router();
const frameRoutes = require("./api/frames");

router.use("/api/frames", frameRoutes);


module.exports = router