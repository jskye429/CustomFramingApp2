const path = require("path");
const router = require("express").Router();

const frameRoutes = require("./api/frames");
const userRoutes = require("./api/users");
const cartRoutes = require("./api/cart")

router.use("/api/frames", frameRoutes);

router.use("/api/users", userRoutes);

router.use("/api/cart", cartRoutes);


module.exports = router

