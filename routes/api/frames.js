const router = require("express").Router;
const framescontroller = require("../../controllers/framescontroller.js");

router.route("/").get(framescontroller.findAll);
