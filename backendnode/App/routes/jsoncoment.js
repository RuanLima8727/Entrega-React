// var db = require('../config/connection')
// var query = require('../model/meuModel')



module.exports = (app) => {
    app.get('/jsoncoment', (req,res)=>{

        // var connection = db()
        

    var connection = app.app.config.connection()
    var query = app.app.model.meuModel; 

        // query.getConteudo(connection, (error,results,fields)=> {
        //     console.log(error,results)
        //     res.render('jsonaqui',{dados:results});
        // })

        query.getConteudo(connection, (error,results,fields)=> {
           
            console.log(error,results)
            res.json(results);
        })

} )}