const app = require("../config/servermongo")
const connection = require("../config/connectionmongo")
const Comentarios = require('../model/mongoModel')
var cors = require('cors');
app.use(cors())

app.get("/", async (req,res)=>{
    const resultado = await Comentarios.find()
    res.json(resultado)
})


app.post("/comentario", async (req, res)=>{
    const {nome, email, mensagem} = req.body

    let resultado = await Comentarios.create({nome, email, mensagem})
    res.json(resultado)
})


//RODE O SERVIDOR AQUI