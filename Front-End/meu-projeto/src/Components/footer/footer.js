import "./footer.css";
import "../../Meu/meuestilo.css"; 
import Pagamento2 from './Pagamento2.png';

export default function Footer() {
    return (
        <footer >
            <footer class="container-fluid rodape mt-4 p-3 borderTop" > 
                
                <h4 class="text-danger"><b>Pagamento</b></h4>
                <img src={Pagamento2} alt="Formas De Pagamento" width="33%" height="50%"/>
                <p>©: Recodepro</p>
            </footer>
        </footer>
    )
}