import './Navbar.css'
import { IoHomeSharp, IoSearchSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { BiInfoCircle } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom'; 

function Navbar(){
    const location = useLocation(); // Obtener la ubicación actual de la URL

    // Función para verificar si el enlace está activo
    const isActive = (path) => location.pathname === path;

    return(
     <nav className="navbar">
     <Link to="/about" className='navbar-logo' title="logo">CineVibe</Link>

        <ul className="navbar-list">
            <li className="navbar-item">
            <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            aria-label="Home page"
            title="home page"
            > 
            <div className="navbar-icon"><IoHomeSharp /> </div>
            <p className="navbar-description">Home</p>
            </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/search" 
                className={`navbar-link ${isActive('/search') ? 'active' : ''}`}
                aria-label="Search page" 
                title="search page"
                >
                <div className="navbar-icon"><IoSearchSharp /></div> 
                <p className="navbar-description">Search</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/favorites" 
                className={`navbar-link ${isActive('/favorites') ? 'active' : ''}`}
                aria-label="Favorites page" 
                title="favorites page"
                >
                <div className="navbar-icon"><MdFavorite /> </div>
                <p className="navbar-description">Favorites</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link 
                to="/about" 
                className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                aria-label="About page" 
                title="about page"
                >
                <div className="navbar-icon"><BiInfoCircle/> </div>
                <p className="navbar-description">About</p>
                </Link>
            </li>

        </ul>
     </nav>
    );
}

export default Navbar;