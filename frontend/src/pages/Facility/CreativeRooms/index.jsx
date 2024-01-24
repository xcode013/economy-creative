import CreativeFloorSlide from './CreativeFloorSlide';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';

import './creativeroomsStyle.css';

function CreativeRooms() {
  const slideDataContents = [
    {
      bgImg: img1,
      headline: 'Creative Academy Space',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore consequuntur minima ipsa provident expedita voluptatibus modi et eum illo.',
    },
    {
      bgImg: img2,
      headline: 'Creative Academy Space',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore consequuntur minima ipsa provident expedita voluptatibus modi et eum illo.',
    },
    {
      bgImg: img3,
      headline: 'Creative Academy Space',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore consequuntur minima ipsa provident expedita voluptatibus modi et eum illo.',
    },
  ];
  return (
    <section className="creativerooms">
      <header>
        <h1 className="creativerooms-headline heading-md">Creative Room BCH</h1>
      </header>
      <main>
        <CreativeFloorSlide title={'Floor 1'} slideDatas={slideDataContents} />
        <CreativeFloorSlide title={'Floor 2'} slideDatas={slideDataContents} />
      </main>
    </section>
  );
}

export default CreativeRooms;
