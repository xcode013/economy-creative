import {useState} from 'react';

import {FaCircleCheck} from 'react-icons/fa6';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';

import './floorreviewStyle.css';

function FloorReview() {
  const floorDB = {
    basement: {
      bannerImg: img1,
      floor: 'basement',
      floorName: 'the Champion Floor',
      fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
    },
    floor1: {
      bannerImg: img2,
      floor: 'floor 1',
      floorName: 'the Champion Floor',
      fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
    },
    floor2: {
      bannerImg: img3,
      floor: 'floor 2',
      floorName: 'the Champion Floor',
      fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
    },
    floor3: {
      bannerImg: img1,
      floor: 'floor 3',
      floorName: 'the Champion Floor',
      fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
    },
    floor4: {
      bannerImg: img2,
      floor: 'floor 4',
      floorName: 'the Champion Floor',
      fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
    },
  };

  const [choosedFloor, setChoosedFloor] = useState(floorDB['basement']);
  const [isActiveNav, setActiveNav] = useState('basement');

  const roomReviewNavigationHandler = (keyFloor) => {
    setChoosedFloor(floorDB[keyFloor]);
    setActiveNav(keyFloor);
  };

  return (
    <section className="floorreview">
      <header>
        <nav>
          <button
            className={`${isActiveNav === 'basement' ? 'activeNav' : ''}`}
            onClick={() => roomReviewNavigationHandler('basement')}>
            Basement
          </button>
          <button
            className={`${isActiveNav === 'floor1' ? 'activeNav' : ''}`}
            onClick={() => roomReviewNavigationHandler('floor1')}>
            floor 1
          </button>
          <button
            className={`${isActiveNav === 'floor2' ? 'activeNav' : ''}`}
            onClick={() => roomReviewNavigationHandler('floor2')}>
            floor 2
          </button>
          <button
            className={`${isActiveNav === 'floor3' ? 'activeNav' : ''}`}
            onClick={() => roomReviewNavigationHandler('floor3')}>
            floor 3
          </button>
          <button
            className={`${isActiveNav === 'floor4' ? 'activeNav' : ''}`}
            onClick={() => roomReviewNavigationHandler('floor4')}>
            floor 4
          </button>
        </nav>
      </header>

      <main>
        <header className="banner-floor">
          <img
            src={
              choosedFloor && choosedFloor.bannerImg
                ? choosedFloor.bannerImg
                : ''
            }
            alt="banner"
            className="banner-img"
          />
        </header>
        <main>
          <h1 className="headline">
            {choosedFloor && choosedFloor.floor ? choosedFloor.floor : ''}
          </h1>
          <h2 className="subheadline">
            {choosedFloor && choosedFloor.floorName
              ? choosedFloor.floorName
              : ''}
          </h2>
          <ul>
            {choosedFloor && choosedFloor.fasilities
              ? choosedFloor.fasilities.map((facility, index) => {
                  return (
                    <li key={index}>
                      <FaCircleCheck />
                      {facility}
                    </li>
                  );
                })
              : ''}
          </ul>
        </main>
      </main>
    </section>
  );
}

export default FloorReview;
