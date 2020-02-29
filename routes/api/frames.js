const router = require("express").Router();
const framescontroller = require("../../controllers/framescontroller.js");

router.route("/api/allframes").get(framescontroller.findAll());

module.exports = router;
