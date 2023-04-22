const express = require("express")
const router = express()

router.use("/api/users", require("./UserRoutes"))
router.use("/api/questions", require("./QuestionRoutes"))
router.use("/api/answers", require("./AnswerRoutes"))
router.use("/api/user-answers", require("./UserAnswerRoutes"))


module.exports = router