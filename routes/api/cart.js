const router = require("express").Router();
const Cart = require("../../models/cart");


router.get("/", (req, res)=>{
    Cart.find().then(data=>{
        res.json(data)
    })
})

router.get("/list/:id", (req, res) =>{
    var user = req.params.id;
    // console.log("getting cart for userID: ", user)
    Cart.find({userID: user}).then(data=>{
        // console.log("Cart Itesm: ", data)
        res.json(data)
    }).catch(err => res.status(422).json(err))
})


router.post("/list/:id", (req, res) =>{
    var user = req.params.id;
    console.log("adding new item to cart for userID: ", user);
    //ready the incoming data to post
    var data = req.body;
    var newItemData = {
        userID: data.userID,
        frameID: data.frameID,
        sku: data.sku,
        series: data.series,
        finish: data.finish,
        length: data.length,
        height: data.height,
        totalMeasure: data.totalMeasure,
        cost: data.cost
    }
    //send new item to DB 
    Cart.create(newItemData).then(cartItems=>{
        res.json(cartItems)
    }).catch(err => res.status(422).json(err))
})

router.delete("/list/:item", (req, res) =>{
    //delete item by its objectID in the cart table
    var item = req.params.item
    Cart.findByIdAndDelete({_id: item}).then(data=>{
        res.send(data);
        res.end();
    }).catch(err => res.status(422).json(err))
})

module.exports = router;