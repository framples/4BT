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
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
})

reviews.get('/reviews', (req, res) => {

    Review.findAll({
    })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = reviews