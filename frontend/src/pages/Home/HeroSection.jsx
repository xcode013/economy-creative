import {Splide, SplideSlide} from '@splidejs/react-splide';
import Button from '../../components/Button';

import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <Splide
        options={{
          type: 'loop',
          rewind: true,
        }}>
        <SplideSlide>
          <div className="hero-slide hero-slide--one">
            <img className="slide-bg" src={img3} alt="Image" />
            <main className="slide-content">
              <h1 className="content-subheading content-subheading--top">
                Wellcome to BCH
              </h1>
              <h2 className="content-heading">Creative Culture Ambience</h2>
              <h3 className="content-subheading content-subheading--bottom">
                Booking ruangan BCH dengan link dibawah ini
              </h3>
              <Button href={'/'}>Space Booking</Button>
            </main>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="hero-slide hero-slide--two">
            <img className="slide-bg" src={img2} alt="Image" />
            <main className="slide-content">
              <h1 className="content-subheading content-subheading--top">
                Wellcome to BCH
              </h1>
              <h2 className="content-heading">Creative Culture Ambience</h2>
              <h3 className="content-subheading content-subheading--bottom">
                Kunjungi BCH dari mana saja dengan tombol dibawah
              </h3>
              <Button href={'/'}>Kunjungi BCH</Button>
            </main>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default HeroSection;
