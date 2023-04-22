const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
        .isString()
        .withMessage("É obrigatório informar o nome.")
        .isLength({ min: 3 })
        .withMessage("O nome precisa ter no mínimo 3 caracteres"),
        body("email")
        .isString()
        .withMessage("É obrigatório informar um email.")
        .isEmail()
        .withMessage("Informe um email válido"),
        body("password")
        .isString()
        .withMessage("É obrigatório informar a senha.")
        .isLength({ min: 4 })
        .withMessage("A senha precisa ter no mínimo 4 caracteres")]
}

const loginValidation = () => {
    return [
        body("email")
        .isString()
        .withMessage("É obrigatório informar um email.")
        .isEmail()
        .withMessage("Informe um email válido"),
        body("password")
        .isString()
        .withMessage("É obrigatório informar a senha.")
        .withMessage("A senha precisa ter no mínimo 4 caracteres")]
}


module.exports = { userCreateValidation, loginValidation }