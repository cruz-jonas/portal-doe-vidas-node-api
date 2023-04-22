const express = require("express")
const router = express.Router()

const { register } = require("../controllers/QuestionController")

const validate = require("../middlewares/handleValidation")
const { questionCreateValidation } = require("../middlewares/questionValidations")

router.post("/register", questionCreateValidation(), validate, register)
// router.post("/login", loginValidation(), validate, login)

module.exports = router