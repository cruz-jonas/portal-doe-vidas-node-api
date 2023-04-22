const mongoose = require("mongoose")
const { Schema } = mongoose

const answerSchema = new Schema({
    position: Number,
    name: String,
    text: String    
})

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;