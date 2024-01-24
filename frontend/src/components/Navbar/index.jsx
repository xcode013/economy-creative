import './navbarStyle.css';
import brandLogo from '../../assets/react.svg';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {FaBars, FaX} from 'react-icons/fa6';
import {useState} from 'react';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav id="navbar">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="trigger_open-btn">
        <FaBars />
      </button>
      <Link className="navbar-brand">
        <img className="brand-logo" src={brandLogo} alt="logos" />
        <h1 className="brand-typography">BCH.</h1>
      </Link>

      <ul className={`navbar-links ${isOpen ? 'opened' : ''}`}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="trigger_close-btn">
          <FaX />
        </button>

        <li className="links-item">
          <NavLink to={'/'} className="link">
            Beranda
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/about'} className="link">
            Tentang
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/facility'} className="link">
            Fasilitas
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/news'} className="link">
            Berita
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/pelaku'} className="link">
            Pelaku
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/sebaran'} className="link">
            Sebaran
          </NavLink>
        </li>
        <li className="links-item">
          <NavLink to={'/contact'} className="link">
            Hubungi
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
