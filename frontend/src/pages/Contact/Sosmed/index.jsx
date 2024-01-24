/* eslint-disable react/jsx-key */
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa6';

import './sosmedStyle.css';

function Sosmed() {
  const sosmedDatas = [
    {
      linkTo: 'www.tiktok.com/',
      icon: <FaTiktok />,
    },
    {
      linkTo: 'www.facebook.com/',
      icon: <FaFacebook />,
    },
    {
      linkTo: 'www.instagram.com/',
      icon: <FaInstagram />,
    },
    {
      linkTo: 'www.linkedin.com/',
      icon: <FaLinkedin />,
    },
    {
      linkTo: 'www.youtube.com/',
      icon: <FaYoutube />,
    },
    {
      linkTo: 'www.twitter.com/',
      icon: <FaTwitter />,
    },
  ];
  return (
    <section className="sosmed">
      <h1 className="sosmed-headline heading-md">Get close with us</h1>

      <main className="sosmed-wrapper">
        {sosmedDatas.map((data, idx) => {
          return (
            <a key={idx} href={data.linkTo} className="sosmed-icon">
              {data.icon}
            </a>
          );
        })}
      </main>
    </section>
  );
}

export default Sosmed;
