module.exports = (app) => {
    app.get('/teste', (req,res)=>{
        res.render('teste')
    })
}