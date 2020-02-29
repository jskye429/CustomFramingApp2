
const router = require("express").Router();
// const framescontroller = require("../../controllers/framescontroller.js");
const Frame = require("../../models/frames");

router.route("/").get((req, res) => {
    Frame.find().then(data => {
    res.json(data);
    })
});

module.exports = router;
