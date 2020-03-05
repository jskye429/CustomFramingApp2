const router = require("express").Router();
const User = require("../../models/users");

router.get("/", (req, res) =>{
    User.find().then(data =>{
        res.json(data);
    })
});

router.post("/signUp", (req, res) => {
    var data = req.body.newUserData
    var newUser = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        userName: data.userName,
        password: data.password
    };
    
    User.create(newUser).then(data=>{
        res.json(data)
    }).catch(err => res.status(422).json(err.errors))
})

module.exports = router;