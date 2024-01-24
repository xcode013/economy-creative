import RootLayout from '../layouts/RootLayout';
import PageHeader from '../../components/PageHeader';
import ContactInfo from './ContactInfo';
import About from './About';
import GoogleMapEmbed from './GoogleMapEmbed';

import './contactStyle.css';
import Sosmed from './Sosmed';

function Contact() {
  return (
    <RootLayout>
      <PageHeader content={'Contact'} />
      <div id="contactPage">
        <div className="wrapper">
          <ContactInfo />
          <About />
        </div>
        <Sosmed />
        <GoogleMapEmbed />
      </div>
    </RootLayout>
  );
}

export default Contact;
