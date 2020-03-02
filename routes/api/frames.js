
const router = require("express").Router();
// const framescontroller = require("../../controllers/framescontroller.js");
const Frame = require("../../models/frames");

router.route("/api/frames").get((req, res) => {
    Frame.find().then(data => {
    res.json(data);
    })
});

router.route("/quoteSpec/:sku").get((req, res) =>{
    Frame.findOne({sku: req.params.sku}).then(data=>{
        console.log(data)
        res.json(data)
    })
})

module.exports = router;
