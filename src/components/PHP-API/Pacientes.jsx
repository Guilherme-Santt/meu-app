import react, { useEffect, useState } from "react"
import axios from "axios"

function Paciente(){
    const [pacientes, SetPacientes] = useState([])
    
    useEffect(() =>{
        axios.get("http://localhost/Santos-API/dados.php")
        .then(response => SetPacientes(response.data))
        .catch(error => console.error("Erro ao buscar dados: ", error))
    }, []); 

    return(
        <div>  
            <table>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Nomes
                    </th>
                    <th>
                        Email
                    </th>   
                </tr>
                
                {pacientes.map((paciente) => (
                <tr key={paciente.id}>
                    <td>{paciente.ID}</td>
                    <td>{paciente.nome}</td>
                    <td>{paciente.email}</td>
                </tr>
                ))}   
            </table>
        </div>
    )
}
export default Paciente