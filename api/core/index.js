require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors())

require("./config/db.js");

const router = require("./routes/Router.js");
app.use(router);

app.get("/", (req, res) => {
    return res.json("Teste api OK")
})

app.get("/teste", (req, res) => {
    const data = [
        {
            "teste":"teste"
        },
        {
            "teste":"teste"
        }
    ]
    return res.json(data)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})