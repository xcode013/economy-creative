import {FaLocationPin, FaPhone, FaEnvelope} from 'react-icons/fa6';

import './contactinfoStyle.css';

function ContactInfo() {
  return (
    <section className="contact__info">
      <h1 className="contact__info-headline heading-md">
        Feel free to get in touch
      </h1>

      <ul className="contact__info-list">
        <li className="list-item">
          <i className="item-icon">
            <FaPhone />
          </i>
          <div className="item-content">
            <h2 className="content-label">Customer Service</h2>
            <p className="content-contact">0857-0430-3181</p>
          </div>
        </li>
        <li className="list-item">
          <i className="item-icon">
            <FaEnvelope />
          </i>
          <div className="item-content">
            <h2 className="content-label">Relation and Partnership</h2>
            <p className="content-contact">kerjasama.bch@gmail.com</p>
          </div>
        </li>
        <li className="list-item">
          <i className="item-icon">
            <FaLocationPin />
          </i>
          <div className="item-content">
            <h2 className="content-label">Location</h2>
            <p className="content-contact">
              Jl. Pemuda Timur No.7b, Ngrowo, Kec. Bojonegoro, Kabupaten
              Bojonegoro, Jawa Timur 62119
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ContactInfo;
