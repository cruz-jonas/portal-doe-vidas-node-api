const mongoose = require("mongoose")
const { Schema } = mongoose

const userAnswerSchema = new Schema({
    position: Number,
    name: String,
    text: String    
})

const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema);

module.exports = UserAnswer;