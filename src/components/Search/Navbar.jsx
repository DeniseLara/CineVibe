import { IoHomeSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { BiInfoCircle } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom'; // Importa Link de React Router DOM
import './Navbar.css'


function Navbar(){
    const location = useLocation(); // Obtener la ubicación actual de la URL

     // Función para verificar si el enlace está activo
  const isActive = (path) => location.pathname === path;

    return(
     <>
     <nav className="navbar">
     <Link to="/about" className='navbar-logo'>CineVibe</Link>

        <ul className="navbar-list">

            <li className="navbar-item">
            <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            > 
            <IoHomeSharp /> <p className="navbar-description">Home</p>
            </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/search" 
                className={`navbar-link ${isActive('/search') ? 'active' : ''}`} // Aplica clase active si está activo
                >
                <IoSearchSharp /> <p className="navbar-description">Search</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/favorites" 
                className={`navbar-link ${isActive('/favorites') ? 'active' : ''}`} // Aplica clase active si está activo
                >
                <MdFavorite /> <p className="navbar-description">Favorites</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/about" 
                className={`navbar-link ${isActive('/about') ? 'active' : ''}`} // Aplica clase active si está activo
                >
                <BiInfoCircle/> <p className="navbar-description">About</p>
                </Link>
            </li>

        </ul>
     </nav>
     </>
    );
}

export default Navbar;