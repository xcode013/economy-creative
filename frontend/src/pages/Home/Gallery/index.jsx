import {Splide, SplideSlide} from '@splidejs/react-splide';
import {Link} from 'react-router-dom';
import {FadeIn} from '../../../components/Animations';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';

import './galleryStyle.css';

function Gallery() {
  return (
    <section className="gallery">
      <FadeIn>
        <header>
          <h1 className="headline heading-sm">Our photo gallery</h1>
        </header>
      </FadeIn>

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
            perMove: 1,
            perPage: 1,
            mediaQuery: 'min',
            breakpoints: {
              768: {
                perPage: 2,
                gap: 10,
              },
              1024: {
                perPage: 3,
              },
            },
          }}>
          <SplideSlide>
            <Link className="link">
              <img src={img1} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="link">
              <img src={img2} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="link">
              <img src={img3} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="link">
              <img src={img1} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="link">
              <img src={img2} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="link">
              <img src={img3} alt="" className="gallery-image" />
            </Link>
          </SplideSlide>
        </Splide>

        <div className="show-datas">
          <FadeIn delay={0.2}>
            <div className="data-card">
              <h1 className="card-headline">2,217</h1>
              <span className="line top"></span>
              <span className="line bottom"></span>
              <h2 className="card-label">Acara</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="data-card">
              <h1 className="card-headline">1,933</h1>
              <span className="line top"></span>
              <span className="line bottom"></span>
              <h2 className="card-label">Performa Ekonomi Kreatif</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="data-card">
              <h1 className="card-headline">148</h1>
              <span className="line top"></span>
              <span className="line bottom"></span>
              <h2 className="card-label">Kolaborator</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="data-card">
              <h1 className="card-headline">114,903</h1>
              <span className="line top"></span>
              <span className="line bottom"></span>
              <h2 className="card-label">Penerima Manfaat</h2>
            </div>
          </FadeIn>
        </div>
      </main>
    </section>
  );
}

export default Gallery;
