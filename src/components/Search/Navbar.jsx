import { IoHomeSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'; // Importa Link de React Router DOM
import './Navbar.css'


function Navbar(){
    return(
     <>
     <nav className="navbar">
     <Link to="/about" className='navbar-logo'>CineVibe</Link>

        <ul className="navbar-list">

            <li className="navbar-item">
            <Link to="/" className="navbar-link">
            <IoHomeSharp /> <p className="navbar-description">Home</p>
            </Link>
            </li>

            <li className="navbar-item">
                <Link to="/search" className="navbar-link">
                <IoSearchSharp /> <p className="navbar-description">Search</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link to="/favorites" className="navbar-link">
                <MdFavorite /> <p className="navbar-description">Favorites</p>
                </Link>
            </li>

            <li className="navbar-item">
                <Link to="/about" className="navbar-link">
                <BiInfoCircle/> <p className="navbar-description">About</p>
                </Link>
            </li>

        </ul>
     </nav>
     </>
    );
}

export default Navbar;