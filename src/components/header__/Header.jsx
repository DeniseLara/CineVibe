import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <nav className='nav'>
      <Link to="/about" className='logo' title='logo'>CineVibe</Link>
      <div className="mode-toggle">
        {darkMode ? <FaMoon /> : <FaSun />}
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            checked={darkMode}
            aria-label="Toggle dark mode"
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Header;
