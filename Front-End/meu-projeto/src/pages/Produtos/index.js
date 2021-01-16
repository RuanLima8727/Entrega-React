import { Row } from 'react-bootstrap';
import React from 'react'; 
import './index.css';


export default function PageProdutos() {

    const [product,setProduct] = React.useState([])

    React.useEffect(  async function Get(){
        const response = await fetch("http://localhost:3001/jsonproduct") // COLOQUE O JSON DOS PRODUTOS AQUI
        const dados = await response.json()
        setProduct(dados) 
    } ,[]
    )
    console.log(product)

    return(
        
        <div>
            {product.map((element)=>{
                console.log(element.img)
                    return(
                            <div className="card" id="cartao" >
                                <img className="card-img-top" id="image" src={`img/${element.img}`}/>
                                <div className="card-body" id={element.idproduto}>
                                    <p className="card-title">{element.info}</p>
                                    <p className="card-text">R$ {element.preco}</p>
                                </div>
                            </div>
                    )})}                    
        </div>



    )}
        
        
