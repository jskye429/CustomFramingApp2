const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/studioFrames"
);
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });



const frameSeed = [
    {
        sku: "24301",
        series:"Black 06",
        finish:"Matt Black",
        height:"1 7/8",
        width:"2 1/2",
        catalogpage:"H-3",
        price:"7"
      },
    { 
      sku: "24401",
      series:"Black 06",
      finish:"Matt Black",
      height:"1 3/8",
      width:"3",
      catalogpage:"H-3",
      price:"10"
    },
  {   
    sku: "24601",
      series:"Black 06",
      finish:"Matt Black",
      height:"8",
      width:"2",
      catalogpage:"H-3",
      price:"7"

    },
    {
      sku: "24501",
      series:"Black 06",
      finish:"Matt Black",
      height:"8",
      width:"2",
      catalogpage:"H-3",
      price:"7"
,
    }
    {
    
    }

];


db.Frame
  .remove({})
  .then(() => db.Frame.collection.insertMany(frameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });