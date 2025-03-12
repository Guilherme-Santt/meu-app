import react, { useEffect, useState } from "react"
import axios from "axios"

function Carro(){
    const [carros, SetCarros] = useState([])
    
    useEffect(() =>{
        axios.get("http://localhost/Santos-API/dados.php")
        .then(response => SetCarros(response.data))
        .catch(error => console.error("Erro ao buscar dados:", error))
    }, []); 

    return(
        <div>  
            <ul>
                {carros.map((carro) => (
                <li key={carro}>
                    {carro.Fabricante} - {carro.modelo}
                </li>
                ))}   
            </ul>
        </div>
    )
}
export default Carro