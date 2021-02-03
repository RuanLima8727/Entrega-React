module.exports = function(app){

    app.get('/usuarios', (req,res)=>{

        var connection = app.app.config.connection();
        var usuarioModel = app.app.model.usuarioModel;

        usuarioModel.getUsuarios(connection, (error,results,fields)=>{
            console.log(error,results)
            res.render('paginas/usuarios', {dados:results});

        });

    });


    app.post('/usuario/buscar/email', (req,res)=>{
        var usuario = req.body;
        var connection = app.app.config.connection();
        var usuarioModel = app.app.model.usuarioModel;

        usuarioModel.getUsuarioEmail(usuario,connection, (error,results)=>{
            console.log(error,results,usuario)
            res.render('paginas/usuarios', {dados:results});

        });

    });

    app.post('/usuario/buscar/id', (req,res)=>{
        var usuario = req.body;
        var connection = app.app.config.connection();
        var usuarioModel = app.app.model.usuarioModel;

        usuarioModel.getUsuarioId(usuario,connection, (error,results)=>{
            console.log(error,results)
            res.render('paginas/usuarios', {dados:results});

        });

    });




}