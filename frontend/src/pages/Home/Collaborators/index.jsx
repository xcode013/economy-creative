import {Splide, SplideSlide} from '@splidejs/react-splide';
import Button from '../../../components/Button';

import brandEx from '../../../assets/react.svg';

import './collaboratorsStyle.css';

function Collaboators() {
  return (
    <section className="collaborators">
      <header>
        <h1 className="headline heading-md">Potensi kerjasama</h1>
        <Button className={'primary'} href="/">
          Collaborate Now
        </Button>
      </header>

      <main>
        <Splide
          options={{
            rewind: true,
            drag: true,
            autoplay: true,
            snap: true,
            arrows: false,
            pagination: false,
            type: 'loop',
            perPage: 1,
            perMove: 1,
            mediaQuery: 'min',
            breakpoints: {
              768: {
                perPage: 3,
                gap: 30,
              },
              1024: {
                perPage: 5,
                gap: 20,
              },
            },
          }}>
          <SplideSlide>
            <div className="brands">
              <img src={brandEx} alt="" className="brand-collaborator" />
              <img src={brandEx} alt="" className="brand-collaborator" />
            </div>
          </SplideSlide>
        </Splide>
      </main>
    </section>
  );
}

export default Collaboators;
