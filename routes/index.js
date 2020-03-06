const path = require("path");
const router = require("express").Router();

const frameRoutes = require("./api/frames");
const userRoutes = require("./api/users");

router.use("/api/frames", frameRoutes);

router.use("/api/users", userRoutes);

// router.user("/api/cart", cartRoutes);


module.exports = router

