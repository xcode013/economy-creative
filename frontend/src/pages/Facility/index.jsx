import RootLayout from '../layouts/RootLayout';
import PageHeader from '../../components/PageHeader';

import Facilities from './Facilities';
import CreativeRooms from './CreativeRooms';
import Subsidy from './Subsidy';
import FloorReview from './FloorReview';

import './facilityStyle.css';

function Facility() {
  return (
    <RootLayout>
      <PageHeader content={'Facility'} />
      <div id="facilityPage">
        <Facilities />
        <CreativeRooms />
        <Subsidy />
        <FloorReview />
      </div>
    </RootLayout>
  );
}

export default Facility;
