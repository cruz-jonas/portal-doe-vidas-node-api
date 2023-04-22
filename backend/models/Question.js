const mongoose = require("mongoose")
const { Schema } = mongoose

const questionSchema = new Schema({
    position: Number,
    name: String,
    text: String    
})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;