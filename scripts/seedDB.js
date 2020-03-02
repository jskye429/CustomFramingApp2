const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/studioFrames"
);
mongoose.connect('mongodb://127.0.0.1:27017/frames', { useNewUrlParser: true });



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
      width:"2 3/4",
      catalogpage:"H-3",
      price:"6"

    },
    {
      sku: "24701",
      series:"Black 06",
      finish:"Matt Black",
      height:"1 7/8",
      width:"1",
      catalogpage:"H-3",
      price:"8"
    },
    {
      sku: "24801",
      series:"Black 06",
      finish:"Matt Black",
      height:"1 1/2",
      width:"4",
      catalogpage:"H-27",
      price:"6"
    },
    {
      sku: "24901",
      series:"Black 06",
      finish:"Matt Black",
      height:"2 5/8",
      width:"13/16",
      catalogpage:"H-27",
      price:"6"
    },
    {
      sku: "25001",
      series:"Black 06",
      finish:"Matt Black",
      height:"3 1/8",
      width:"1 1/8",
      catalogpage:"H-27",
      price:"7"
    },
    {
      sku: "25101",
      series:"Black 06",
      finish:"Matt Black",
      height:"1 7/8",
      width:"1 1/2",
      catalogpage:"H-27",
      price:"9"
    },
    {
      sku: "26952",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26954",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26955",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26956",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26957",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26958",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26959",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26960",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26961",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26963",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26964",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26965",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26966",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26967",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26968",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26969",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26970",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "26971",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "22057",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"1 1/4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "22060",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"1 1/4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "22070",
      series:"Poems",
      finish:"Matt Color",
      height:"8",
      width:"1 1/4",
      catalogpage:"H-35",
      price:"14"
    },
    {
      sku: "62320",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 3/8",
      width:"1 1/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "62330",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 3/8",
      width:"1 1/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "62340",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 3/8",
      width:"1 1/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "62350",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 3/8",
      width:"1 1/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "63320",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 1/4",
      width:"1 3/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "63330",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 1/4",
      width:"2 3/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "63340",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 1/4",
      width:"3 3/4",
      catalogpage:"G-29",
      price:"15"
    },
    { 
      sku: "63350",
      series:"Armour",
      finish:"Gold and Silver",
      height:"1 1/4",
      width:"4 3/4",
      catalogpage:"G-29",
      price:"15"
    },

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