var app = require('./App/config/server');

var rotaHome = require('./App/routes/teste')(app);
var rotaHome = require('./App/routes/jsoncoment')(app);
var rotaHome = require('./App/routes/home')(app)
var rotaHome = require('./App/routes/jsonproduct')(app)

app.listen(3001);
console.log("Servidor Online")

