const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({

    userID: {
        type: String,
        required: true 
        },
    frameID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Frame",
        required: true
    },
    series: {type: String, required: true},
    finish: {type: String, required: true},
    sku: {type: Number, required: true},
    length: {type: Number, required: true},
    height: {type: Number, required: true},
    totalMeasure: {type: Number, require: true},
    cost: {type: Number, required: true}
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;