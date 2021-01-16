import React from 'react'; //

export default function Contatos(props) {

    const [comment,setComment] = React.useState([])

    React.useEffect( async function Get(){
        const response = await fetch("http://localhost:3001/jsoncoment")
        const dados = await response.json()
        setComment(dados) 
    } ,[]
    )

    return(
        <ul className="container list-group my-4">
            <p className="bg-dark lead text-light p-4 display-4">Veja Reviews de quem comprou!!!</p>
           {comment.map((element) => {
           return(
                <li key={element.idcliente} className="list-group-item list-group-item-dark">
                    <p><b>Cliente: </b> {element.nome}</p>
                    <p><b>Contato: </b>{element.email}</p>
                    <p><b>Compra: </b>{element.produto}</p>
                    <p><b>Review: </b>{element.review}</p>
                </li>
    )
        }
            )
                }
        </ul>)
}