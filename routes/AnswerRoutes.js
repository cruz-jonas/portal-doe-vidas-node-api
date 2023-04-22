const express = require("express")
const router = express.Router()

const { register } = require("../controllers/AnswerController")

const validate = require("../middlewares/handleValidation")
const { answerCreateValidation } = require("../middlewares/answerValidations")

router.post("/register", answerCreateValidation(), validate, register)

module.exports = router