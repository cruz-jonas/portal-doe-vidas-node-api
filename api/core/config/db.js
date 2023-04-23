const mongoose = require("mongoose");
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const connect = async () => {
    try {
        const dbConnect = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ji06rkn.mongodb.net/?retryWrites=true&w=majority`)

        console.log("Banco conectado")
        return dbConnect
    } catch (error) {
        console.log(error)
    }
}
connect();

module.exports = connect;