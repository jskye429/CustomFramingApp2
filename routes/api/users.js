const router = require("express").Router();
const User = require("../../models/users");
const bcrypt = require('bcrypt');


router.get("/", (req, res) =>{
    User.find().then(data =>{
        res.json(data);
    })
});

router.post("/signUp", (req, res) => {
    var data = req.body.newUserData;
    var input = data.email;
    const rejectMsg={ email: input, message: "Email already in use." }
    const acceptMsg= {  acceptance: true };
    //check if user in database already by looking for email
    User.find({ email: input}).then(checkedData =>{
        if(checkedData.length>0){
            console.log("check 1")
            res.json(rejectMsg)
            res.end();
        }else{
            console.log("check 2")
            //ecrypt password
            const saltRounds = 10;
            const hashed = bcrypt.hashSync(data.password, saltRounds);
            //create userData to send to DB with encrypted password
            var newUser = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashed
            };
            //add to DB
            User.create(newUser).then(data=>{
                res.json(acceptMsg)
            }).catch(err => res.status(422).json(err.errors))
            }
    })
   
})



module.exports = router;