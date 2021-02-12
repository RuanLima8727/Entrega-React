import React from 'react'

export default function PagePedidos() {

    async function registrarComentario(event){
        event.preventDefault();

        const teste = {
            nome : document.getElementById("nome").value,
            email : document.getElementById('email').value,
            mensagem : document.getElementById('msg').value
        }
        console.log(JSON.stringify(teste))
        const url = "http://localhost:3002/comentario";

        fetch(url,{
            method:"POST",
            headers: {
                "Content-type":"application/json"
              },
            body:JSON.stringify(teste)
        }).then((response)=>response.json()).then((dados)=>{console.log(dados)});
          
        }             
        
              
        

        const [product,setProduct] = React.useState([])

        React.useEffect(  async function Get(){
            const response = await fetch("http://localhost:3002/") 
            const dados = await response.json()
            setProduct(dados) 
        } ,[]
        )
        console.log()

    return(
        <div className="container">
            <div className="container p-4 bg-dark">
            <p className="bg-dark lead text-light p-4 display-4">DEIXE SEU COMENTARIO!!</p>
            <form method="POST" action="" onSubmit= {registrarComentario} >
                <label className="input-group py-2 text-light lead">Nome :</label>
                <input id="nome"className="form-control"  type="text" name="nome" /><br/>

                <label className="input-group py-2 text-light lead">Email :</label>
                <input id="email" className="form-control" type="text" name="email" /><br/>

                <label className="input-group py-2 text-light lead" >Comentario :</label>
                 
                <textarea id="msg" className="form-control py-4" type="text" name="mensagem" /><br/>                

                <input className="btn btn-success" type="submit" />
             </form>
             
             </div>
             <br/>
             <br/>
             <br/>
             


                                
            <div>
                {product.map((element)=>{
                        return(
                                <div className="card py-4 p-4"  >
                                        <p className="card-title">
                                            <b>Nome: </b> {element.nome}</p>                      
                                        <p className="card-title">
                                            <b>Email: </b>{element.email}</p>
                                        <p className="card-text">
                                            <b>Mensagem: </b>{element.mensagem}</p>
                                </div>
                               
                            )})}                    
            </div>
        </div>



             
        
    )
}