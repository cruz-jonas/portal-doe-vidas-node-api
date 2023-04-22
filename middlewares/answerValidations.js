const { body } = require("express-validator")

const answerCreateValidation = () => {
    return [
        body("position")
        .isNumeric()
        .withMessage("É obrigatório informar a posição."),
        body("name")
        .isString()
        .withMessage("É obrigatório informar o nome da resposta.")
        .isLength({ max: 50 })
        .withMessage("O nome da resposta precisa ter no máximo 50 caracteres"),
        body("text")
        .isString()
        .withMessage("É obrigatório informar a resposta."),
    ]
}

module.exports = {answerCreateValidation}