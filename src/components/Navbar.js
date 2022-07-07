import { Link } from "react-router-dom";
import '../stylesheets/navbar.css'

function Navbar () {
  return (
    <nav className="Navbar">
      <ul id="contenedor-link">
        <li className="navbar-link"><Link to='/' className="Link">Inicio</Link></li>
        <li className="navbar-link"><Link to='/pokedex' className="Link">Pokedex</Link></li>
        <li className="navbar-link"><Link to='/2' className="Link">Calculadoras</Link></li>
        <li className="navbar-link"><Link to='/3' className="Link">Computadoras</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar ;