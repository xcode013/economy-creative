import {Splide, SplideSlide} from '@splidejs/react-splide';
import {Link} from 'react-router-dom';

import {FadeIn} from '../../components/Animations';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

function GallerySection() {
  return (
    <section className="gallery-section">
      <FadeIn>
        <header className="gallery-header">
          <h1 className="header-headline heading-sm">Our photo gallery</h1>
        </header>
      </FadeIn>

      <main className="gallery-body">
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
            <Link className="body-link">
              <img src={img1} alt="" className="link-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="body-link">
              <img src={img2} alt="" className="link-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="body-link">
              <img src={img3} alt="" className="link-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="body-link">
              <img src={img1} alt="" className="link-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="body-link">
              <img src={img2} alt="" className="link-image" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link className="body-link">
              <img src={img3} alt="" className="link-image" />
            </Link>
          </SplideSlide>
        </Splide>

        <div className="body-card">
          <FadeIn delay={0.2}>
            <div className="card-show">
              <h1 className="card-headline">2,217</h1>
              <span className="card-line card-line--top"></span>
              <span className="card-line card-line--bottom"></span>
              <h2 className="card-label">Acara</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="card-show">
              <h1 className="card-headline">1,933</h1>
              <span className="card-line card-line--top"></span>
              <span className="card-line card-line--bottom"></span>
              <h2 className="card-label">Performa Ekonomi Kreatif</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="card-show">
              <h1 className="card-headline">148</h1>
              <span className="card-line card-line--top"></span>
              <span className="card-line card-line--bottom"></span>
              <h2 className="card-label">Kolaborator</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="card-show">
              <h1 className="card-headline">114,903</h1>
              <span className="card-line card-line--top"></span>
              <span className="card-line card-line--bottom"></span>
              <h2 className="card-label">Penerima Manfaat</h2>
            </div>
          </FadeIn>
        </div>
      </main>
    </section>
  );
}

export default GallerySection;
