const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const frameSchema = new Schema({

    sku: { type: String, required: true },
    series:{ type: String, required: true},
    finish:{ type: String, required: true },
    height:{ type: String, required: true },
    width:{ type: String, required: true },
    catalogpage:{ type: String, required: true },
    price:{ type: String, required: true },
    img: {type: String, require: false}
});

const Frame = mongoose.model("Frame", frameSchema);


module.exports = Frame;







