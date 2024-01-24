import {Splide, SplideSlide} from '@splidejs/react-splide';
import Button from '../../../components/Button';

import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';

import './heroStyle.css';

function Hero() {
  return (
    <section className="hero">
      <Splide
        options={{
          type: 'loop',
          rewind: true,
        }}>
        <SplideSlide>
          <div className="slide-item slide-one">
            <img className="item-bg" src={img3} alt="Image" />
            <main className="item-content variant-1">
              <h1 className="subheading subhead-top">Wellcome to BCH</h1>
              <h2 className="heading">Creative Culture Ambience</h2>
              <h3 className="subheading subhead-bottom">
                Booking ruangan BCH dengan link dibawah ini
              </h3>
              <Button href={'/'}>Space Booking</Button>
            </main>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-item slide-two">
            <img className="item-bg" src={img2} alt="Image" />
            <main className="item-content variant-2">
              <h1 className="subheading subhead-top">Wellcome to BCH</h1>
              <h2 className="heading">Creative Culture Ambience</h2>
              <h3 className="subheading subhead-bottom">
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

export default Hero;
