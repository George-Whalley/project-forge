const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/blog');



var dbURI = 'mongodb+srv://george:channel616@test-cluster-1.mewd5mx.mongodb.net/project_forge_database?retryWrites=true&w=majority&appName=Test-Cluster-1'
mongoose.connect(dbURI.concat('project_forge_database'))
.then((result)=> console.log('connected to db'))
.catch((err) => console.log(err))

/* GET users listing. */
router.get('/', function(req, res) {
    const blog = new Blog({
        title: 'Georges First Blog',
        snippet: 'I can’t believe that worked!',
        body: 'Goodness gracious, Bloody Nora and Christ alive this is going to be my first blog post, on a website I’ve built myself!! In the words of my spirt animal Victor... I don’t believe it. Given that it is 11:21pm this will not be the most detailed entry, but my excitement can’t be contained, and I want to submit this tonight. If you are reading this Mum, Dad, Brother welcome to Project Forge. I have mentioned this to you all at various points but now you can tangibly see it! It is as this point, I should make you aware any suggested improvements will not be welcome, apart from Lawrence as he will understand the sheer buggery it can be getting the simplest thing working in things like this. I spent at least 4 hours today, admittedly for work, not this project, working out how to convert one date from British time and Australian time zone. At certain points it seemed easier to me, to move the colony. I hope you enjoy the website, but don’t care if you don’t 😉 '
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

// Get Blogs
router.get('/get-blogs', async function(req, res) {
    await Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

// Post Blog
router.post("/post-blog", (req, res) => {
    const {title, snippet, body} = req.body;
    const blog = new Blog({
        title: title,
        snippet: snippet,
        body: body
    })
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})




module.exports = router;