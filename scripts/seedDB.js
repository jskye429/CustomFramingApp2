const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/studioFrames"
);



const frameSeed = [
    {
        sku: "24301",
        series:"Black 06",
        finish:"Matt Black",
        height:"1 7/8",
        width:"2 1/2",
        catalog_page:"H-3",
        price_per_foot:"7"
      },
    { 
      sku: "24401",
      series:"Black 06",
      finish:"Matt Black",
      height:"1 3/8",
      width:"3",
      catalog_page:"H-3",
      price_per_foot:"10"
    },
  {   
    sku: "24601",
      series:"Black 06",
      finish:"Matt Black",
      height:"8",
      width:"2",
      catalog_page:"H-3",
      price_per_foot:"7"

    }
];


db.Frames
  .remove({})
  .then(() => db.Book.collection.insertMany(frameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });