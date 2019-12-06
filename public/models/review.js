let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ReviewSchema = new Schema({

    review: {
        type: String
    }
});

let Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;