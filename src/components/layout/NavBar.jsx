import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar(){
    return(
    <header className='Container'>
      <ul>
          <li>
            <Link className='option-container' to="/">Home</Link>
          </li>
          <li>
            <Link className='option-container' to="/Pacientes">Pacientes</Link>
          </li>
          <li>
            <Link className='option-container' to="/Relatorio">Relatorio</Link>
          </li>
        </ul>
      </header>
    )
}
export default NavBar