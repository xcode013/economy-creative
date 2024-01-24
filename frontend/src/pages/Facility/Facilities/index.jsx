import {FaBuilding} from 'react-icons/fa6';
import FacilityCard from './FacilityCard';

import './FacilitiesStyle.css';

function Facilities() {
  return (
    <section className="facilities">
      <header>
        <h1 className="facilities-headline heading-md">Sarana & Prasarana</h1>
      </header>
      <FacilityCard
        icon={<FaBuilding />}
        facilityName={'Creative Room'}
        facilityPlace={'Floor 2, 3, 4'}
      />
      <FacilityCard
        icon={<FaBuilding />}
        facilityName={'Creative Room'}
        facilityPlace={'Floor 2, 3, 4'}
      />
      <FacilityCard
        icon={<FaBuilding />}
        facilityName={'Creative Room'}
        facilityPlace={'Floor 2, 3, 4'}
      />
      <FacilityCard
        icon={<FaBuilding />}
        facilityName={'Creative Room'}
        facilityPlace={'Floor 2, 3, 4'}
      />
      <FacilityCard
        icon={<FaBuilding />}
        facilityName={'Creative Room'}
        facilityPlace={'Floor 2, 3, 4'}
      />
    </section>
  );
}

export default Facilities;
