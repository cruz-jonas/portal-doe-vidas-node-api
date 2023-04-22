const Answer = require("../models/Answer")

const register = async(req, res) => {

    const {position, name, text} = req.body

    const answer = await Answer.findOne({name})

    if(answer) {
        res.status(422).json({errors: ["Resposta já cadastrada com este nome."]})
        return
    }

    const newAnswer = await Answer.create({
        position, name, text
    })

    if(!newAnswer) {
        res.status(422).json({errors: ["Erro ao criar resposta, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({ 
        id: newAnswer._id,
    })

}

module.exports = {register}