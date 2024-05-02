const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');



var dbURI = 'mongodb+srv://george:channel616@test-cluster-1.mewd5mx.mongodb.net/project_forge_database?retryWrites=true&w=majority&appName=Test-Cluster-1'
mongoose.connect(dbURI.concat('project_forge_database'))
.then((result)=> console.log('connected to db'))
.catch((err) => console.log(err))

/* GET users listing. */
router.get('/', function(req, res) {
    const user = new User({
        email: 'george@churchoverhouse.co.uk',
        password: 'Channel616',
        permissions: 'Admin'
    });

    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

/* Post User */
router.post("/", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json(user.permissions)
            }
            else{
                res.json("Password incorrect")
            }
        }
        else{
            res.json("No User Found")
        }

    })
})

module.exports = router;