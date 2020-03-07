const router = require("express").Router();
const Cart = require("../../models/cart");


router.get("/", (req, res)=>{
    Cart.find().then(data=>{
        res.json(data)
    })
})

router.get("/list/:id", (req, res) =>{
    var user = req.params.id;
    console.log("this user: ", user)
    Cart.find({userID: user}).then(data=>{
        console.log("my data:", data)
        res.json(data)
    }).catch(err => console.log(err))
        //  res.status(422).json("error", err))
})


router.post("/list/:id", (req, res) =>{
    var user = req.params.id;
    console.log("adding new item to cart for user: ", user);
    //ready the incoming data to post
    var data = req.body;
    var newItemData = {
        userID: data.userID,
        frameID: data.frameID,
        sku: data.sku,
        length: data.length,
        height: data.height,
        totalMeasure: data.totalMeasure,
        cost: data.cost
    }
    //send new item to DB 
    Cart.create(newItemData).then(cartItems=>{
        console.log("my cart:", cartItems)
        res.json(cartItems)
    }).catch(err => console.log(err))
        //  res.status(422).json(err)
})

router.delete("/list/:item", (req, res) =>{
    // var user = req.params.id;
    var item = req.params.item

    Cart.findByIdAndDelete({_id: item}).then(data=>{
        console.log("check 1: ", data)
        // location.reload()
    }).catch(err => console.log(err))

})

module.exports = router;