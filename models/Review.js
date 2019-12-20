const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    first_name: {
        type: String
    },
    date_name: {
        type: String
    },
    platform: {
        type: String
    },
    one_word: {
        type: String 
    },
    review: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Review = mongoose.model('reviews', ReviewSchema)