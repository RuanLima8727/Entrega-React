var mysql = require('mysql');


var connMysql = () => {
    console.log("Conexão estabelicida com o banco");

    return connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fseletro'
    } )
}

module.exports = () => {
    return connMysql
}