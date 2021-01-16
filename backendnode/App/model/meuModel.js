module.exports = () => {
    this.getConteudo = (connection,callback) => {
        
        connection.query("SELECT * FROM cliente INNER JOIN comentario ON cliente.idcliente = comentario.idcliente;", callback)

        }  

    this.getProduct = (connection,callback) => {
        connection.query("SELECT * FROM produto",callback)
    }
        return this;
}