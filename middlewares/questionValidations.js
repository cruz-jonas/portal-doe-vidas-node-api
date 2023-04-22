const { body } = require("express-validator")

const questionCreateValidation = () => {
    return [
        body("position")
        .isNumeric()
        .withMessage("É obrigatório informar a posição."),
        body("name")
        .isString()
        .withMessage("É obrigatório informar o nome da pergunta.")
        .isLength({ max: 50 })
        .withMessage("O nome da pergunta precisa ter no máximo 50 caracteres"),
        body("text")
        .isString()
        .withMessage("É obrigatório informar a pergunta."),
    ]
}

module.exports = {questionCreateValidation}