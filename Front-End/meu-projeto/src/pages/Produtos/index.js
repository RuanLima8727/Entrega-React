import { Row } from 'react-bootstrap';
import React from 'react'; 
import './index.css';
import Geladeira1 from './img/Geladeira1.png';
import Geladeira2 from './img/Geladeira2.png';
import Microondas1 from './img/Microondas 1.png';
import Microondas2 from './img/Microondas 2.png';
import Microondas3 from './img/Microondas 3.png';
import Fogão from './img/Fogão 1.png';
import Fogão2 from './img/Fogão 2.png';
import Fogão3 from './img/Fogão 3.png';

export default function PageProdutos() {

    const [comment,setComment] = React.useState([])

    React.useEffect(  async function Get(){
        const response = await fetch("http://projetos/USEPHPAQUI/Entrega%20React%20aquiii/Back-End/Product.php")
        const dados = await response.json()
        setComment(dados) 
    } ,[]
    )

    return(
        
        <div>
            
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Geladeira1}/>
                <div className="card-body">
                    <p className="card-title">Geladeira frost free</p>
                    <p className="card-text">R$ 1.300</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Fogão}/>
                <div className="card-body">
                    <p className="card-title">Fogão Brastemp</p>
                    <p className="card-text">R$ 450</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Microondas1}/>
                <div className="card-body">
                    <p className="card-title">Microondas Brastemp</p>
                    <p className="card-text">R$ 360</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Microondas2}/>
                <div className="card-body">
                    <p className="card-title">Microondas Consul</p>
                    <p className="card-text">R$ 1500</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Geladeira2}/>
                <div className="card-body">
                    <p className="card-title">Geladeira Consul </p>
                    <p className="card-text">R$ 1.200</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Fogão2}/>
                <div className="card-body">
                    <p className="card-title">Fogão consul </p>
                    <p className="card-text">R$ 430</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Microondas3}/>
                <div className="card-body">
                    <p className="card-title">Microondas simples</p>
                    <p className="card-text">R$ 480</p>
                    

                </div>
            </div>
            <div className="card" id="cartao">
                <img className="card-img-top" id="image" src={Fogão3}/>
                <div className="card-body">
                    <p className="card-title">Lava louças simples</p>
                    <p className="card-text">R$ 1560</p>
                    

                </div>
            </div>
        
        
        </div>



    )}
        
        
