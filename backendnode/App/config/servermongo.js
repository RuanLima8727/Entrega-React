const express = require("express");
var cors = require('cors');




const app = express();


app.use(express.json())

const port = 3002
app.listen(port, ()=>{
    console.log("http://localhost:" + port)
})

module.exports = app


//RODE O SERVIDOR NA ROTA (COMENTARIO.JS)