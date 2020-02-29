
const router = require("express").Router();
// const framescontroller = require("../../controllers/framescontroller.js");
const Frame = require("../../models/frames");

router.route("/").get((req, res) => {
    Frame.find().then(data => {
    console.log(data);
    })
});

module.exports = router;
