// Library-Component
import {Splide, SplideSlide} from '@splidejs/react-splide';

// Global-Component
import Button from '../../components/Button';

// Assets
import brandEx from '../../assets/react.svg';

function CollaborationSection() {
  return (
    <section className="collaboration-section s-p">
      <header className="collaboration-header">
        <h1 className="header-heading heading-md">Potensi kerjasama</h1>
        <Button className={'primary'} href="/">
          Collaborate Now
        </Button>
      </header>

      <main className="collaboration-body">
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
            <div className="body-collaborator">
              <img src={brandEx} alt="" className="collaborator-brand" />
              <img src={brandEx} alt="" className="collaborator-brand" />
            </div>
          </SplideSlide>
        </Splide>
      </main>
    </section>
  );
}

export default CollaborationSection;
