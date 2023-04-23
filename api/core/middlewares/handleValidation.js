const { validationResult } = require("express-validator")

const validate = (req, res, next) => {

    req.setHeader('Access-Control-Allow-Origin', "*")
    req.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next();
    }

    const extractedErrors = []

    errors.array().map((err) => extractedErrors.push(err.msg))

    return res.status(422).json({
        errors: extractedErrors
    })

 }
 module.exports = validate