const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/frames"
  );
  

  const userSeed = [

    {
        firstName: "Ellen",
        lastName: "White",
        email: "evwhite@gmail.com",
        password: "password"
    },
    {
        firstName: "Jacquline",
        lastName: "Cameron",
        email: "jcameron@gmail.com",
        password: "password"
    },
    {
        firstName: "Dwayne",
        lastName: "Laughlin",
        email: "dlaughlin@gmail.com",
        password: "password"
    },

  ];

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

