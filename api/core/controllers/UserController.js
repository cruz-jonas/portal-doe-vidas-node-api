const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {expiresIn: "7d"})
}

const register = async(req, res) => {

    const {name, email, password} = req.body

    const user = await User.findOne({email})

    if(user) {
        res.status(422).json({errors: ["Por favor, utilize outro email"]})
    }

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name, email, password: passwordHash
    })

    if(!newUser) {
        res.status(422).json({errors: ["Erro ao criar usuário, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({ 
        id: newUser._id,
        token: generateToken(newUser._id),
    })

}

const login = async(req, res) => {
    const { email, password} = req.body

    const user = await User.findOne({email})

    if(!user) {
        res.status(422).json({errors:["Usuário não encontrado"]})
        return
    }

    if(!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors:["Senha inválida"]})
        return
    }

    res.status(201).json({ 
        id: user._id,
        token: generateToken(user._id),
    })
}

module.exports = {register, login}