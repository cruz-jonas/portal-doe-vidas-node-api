const UserAnswer = require("../models/UserAnswer")

const register = async(req, res) => {

    const {position, name, text} = req.body

    const newUserAnswer = await UserAnswer.create({
        position, name, text
    })

    if(res.errors) {
        console.log(res.errors)
    }

    if(!newUserAnswer) {
        res.status(422).json({errors: ["Erro ao registrar resposta, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({ 
        id: newUserAnswer._id,
    })

}

module.exports = {register}