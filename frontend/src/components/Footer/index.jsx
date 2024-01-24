import './footerStyle.css';

import logo from '../../assets/react.svg';
import {Link} from 'react-router-dom';
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaLocationPin,
  FaPhone,
  FaSquareFacebook,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <main>
        <div className="brand">
          <img src={logo} alt="" className="brand-logo" />
          <h1 className="brand-typography">BCH</h1>
        </div>
        <ul className="sublinks">
          <h1 className="title">SubLink</h1>
          <li className="sublink-item">
            <Link to={'/visitatiom'} className="item-link">
              Visitation
            </Link>
          </li>
          <li className="sublink-item">
            <Link to={'/event'} className="item-link">
              Event
            </Link>
          </li>
          <li className="sublink-item">
            <Link to={'/bigdata'} className="item-link">
              Big Data
            </Link>
          </li>
        </ul>
        <ul className="sosmeds">
          <h1 className="title">Social Media</h1>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaSquareFacebook />
            </i>
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="item-link">
              Facebook
            </a>
          </li>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaInstagram />
            </i>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="item-link">
              Instagram
            </a>
          </li>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaYoutube />
            </i>
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="item-link">
              YouTube
            </a>
          </li>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaTwitter />
            </i>
            <a
              href="https://www.twitter.com/"
              target="blank"
              className="item-link">
              Twitter
            </a>
          </li>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaTiktok />
            </i>
            <a
              href="https://www.tiktok.com/"
              target="blank"
              className="item-link">
              TikTok
            </a>
          </li>
          <li className="sosmed-item">
            <i className="item-icon">
              <FaLinkedinIn />
            </i>
            <a
              href="https://www.linkedin.com/"
              target="blank"
              className="item-link">
              LinkedIn
            </a>
          </li>
        </ul>
        <ul className="contacts">
          <h1 className="title">Contact Info</h1>
          <li className="contact-item">
            <i className="item-icon">
              <FaPhone />
            </i>
            <div className="item-info">
              <h1 className="info-label">Customer Service</h1>
              <p className="info-contact">0857 0430 3181</p>
            </div>
          </li>
          <li className="contact-item">
            <i className="item-icon">
              <FaEnvelope />
            </i>
            <div className="item-info">
              <h1 className="info-label">Relations & Partnership</h1>
              <p className="info-contact">kerjasama.bch@gmail.com</p>
            </div>
          </li>
          <li className="contact-item">
            <i className="item-icon">
              <FaLocationPin />
            </i>
            <div className="item-info">
              <h1 className="info-label">Location</h1>
              <p className="info-contact">
                Jl. Pemuda Timur No.7b, Ngrowo, Kec. Bojonegoro, Kabupaten
                Bojonegoro, Jawa Timur 62119
              </p>
            </div>
          </li>
        </ul>
      </main>

      <h1 className="copyright">
        2024 – Now © Copyright by Malang Creative Center.
      </h1>
    </footer>
  );
}

export default Footer;
