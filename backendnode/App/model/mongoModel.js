const {Schema , model} = require("mongoose")

const ComentSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    mensagem : {
        type : String
    }
})

const modelo = model("fseletro" , ComentSchema)

module.exports = modelo