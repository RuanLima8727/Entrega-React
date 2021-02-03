var express = require('express');
var consign = require('consign');
var cors = require('cors');
var bodyParser = require('body-parser');
var {check,validationResult} = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views','././app/views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

consign()
.include('././app/routes') 
.then('././app/config/connection.js')
.then('././app/model')
.into(app); 

//Lembre-se que nem sempre que um caminho tem app escrito, isso se refere a pasta App, app também faz referencia ao express!!!!! que no caso funciona com app minusculo

module.exports = app;
