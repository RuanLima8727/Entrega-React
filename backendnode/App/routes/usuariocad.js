const usuarioModel = require("../model/usuarioModel");
const {check, validationResult} = require("express-validator");
const crypto = require('crypto');

module.exports = function (app){
    app.get('/usuariocad', function(req,res){
        res.render('paginas/usuariocad',{validacao:{errors:{},}, dados :{}});

    });

    app.post('/usuario/salvar',[
        check('nome','Nome é obrigatório!!').exists(),
        check('usuario','Usuário é obrigatório!!').exists().isLength({min:5,max:15}),
        check('senha','A senha precisa ter no mínimo 5 e no máximo 15!!').exists().isLength({min:5,max:15}),
        check('email','Email é obrigatório!!').isEmail().normalizeEmail()
    ] ,(req,res)=>{

        var usuario = req.body;

        var senhaCriptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
        usuario.senha = senhaCriptografada

        var erros = validationResult(req);
        if(!erros.isEmpty()){
            res.render("paginas/usuariocad",{validacao:erros, dados:usuario})
            console.log(erros);
            return;
        }




        
        var connection = app.app.config.connection();
        var usuarioModel = app.app.model.usuarioModel;

        usuarioModel.setUsuario(usuario,connection,function(error,results){

        });

        usuarioModel.getUsuarios(connection,(error,results,fields)=>{
            console.log(error,results)
            res.render("paginas/usuarios", {dados:results});
        });

    });

    

}