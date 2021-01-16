
module.exports = (app) => {
    app.get('/jsonproduct', (req,res)=>{
       

    var connection = app.app.config.connection()
    var query = app.app.model.meuModel; 

        // query.getConteudo(connection, (error,results,fields)=> {
        //     console.log(error,results)
        //     res.render('jsonaqui',{dados:results});
        // })

        query.getProduct(connection, (error,results,fields)=> {
           
            console.log(error,results)
            res.json(results);
        })

} )}