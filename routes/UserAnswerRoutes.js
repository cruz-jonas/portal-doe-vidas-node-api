const express = require("express")
const router = express.Router()

const { register } = require("../controllers/UserAnswerController")

const validate = require("../middlewares/handleValidation")
const { userAnswerCreateValidation } = require("../middlewares/userAnswerValidations")

router.post("/register", userAnswerCreateValidation(), validate, register)

module.exports = router