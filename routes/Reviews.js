const express = require("express");
const reviews = express.Router()
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Review = require("../models/Review")
reviews.use(cors())

process.env.SECRET_KEY = 'secret'

reviews.post('/profile', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
       date_name: req.body.date_name,
        platform: req.body.platform,
        one_word: req.body.one_word,
        review: req.body.review,
        created: today
    }

    Review.create(userData)
    .then(review => {
        res.json({ status: review.date_name + 'this is a test'})
    })
    .catcher(err => {
        res.send('error' + err)
    })
})

reviews.get('/reviews', (req, res) => {

    Review.findAll({
    })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = reviews