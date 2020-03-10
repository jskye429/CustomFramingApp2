const router = require("express").Router();
const Frame = require("../../models/frames");

router.get("/", (req, res) => {
    Frame.find().then(data => {
    res.json(data);
    })
});

router.get("/quoteSpec/:sku",(req, res) =>{
    var reqsku = req.params.sku
    Frame.find({sku: reqsku}).then(data=>{
        res.json(data)
    }).catch(err => res.status(422).json(err))
})

module.exports = router;
