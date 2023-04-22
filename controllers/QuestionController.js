const Question = require("../models/Question")

const register = async(req, res) => {

    const {position, name, text} = req.body

    const question = await Question.findOne({name})

    if(question) {
        res.status(422).json({errors: ["Pergunta já cadastrada com este nome."]})
        return
    }

    const newQuestion = await Question.create({
        position, name, text
    })

    if(!newQuestion) {
        res.status(422).json({errors: ["Erro ao criar pergunta, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({ 
        id: newQuestion._id,
    })

}

module.exports = {register}