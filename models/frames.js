const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const frameSchema = new Schema({

    sku: { type: String, required: true },
    series:{ type: String, required: true},
    finish:{ type: String, required: true },
    height:{ type: String, required: true },
    width:{ type: String, required: true },
    catalog_page:{ type: String, required: true },
    price_per_foot:{ type: String, required: true },

});

const Frame = mongoose.model("Frame", frameSchema);


module.exports = Frame;
// module.exports = mongoose.model('frameSchema', frameSchema);







