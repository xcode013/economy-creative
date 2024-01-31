import {Splide, SplideSlide} from '@splidejs/react-splide';
import {FaBuilding} from 'react-icons/fa6';
import {SectorCard} from './HomeComponents';

function SectorSection() {
  return (
    <section className={`sector-section s-p`}>
      <header className={`sector-header`}>
        <h1 className={`sector-heading heading-md`}>17 sector Ekonomi</h1>
      </header>

      <Splide
        options={{
          rewind: true,
          drag: true,
          autoplay: true,
          snap: true,
          type: 'loop',
          gap: 10,
          mediaQuery: 'min',
          perPage: 2,
          perMove: 1,
          breakpoints: {
            768: {
              perPage: 4,
            },
            1024: {
              perPage: 5,
            },
          },
          interval: 3000,
        }}>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
        <SplideSlide>
          <SectorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default SectorSection;
