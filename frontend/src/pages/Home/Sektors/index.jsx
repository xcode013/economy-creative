import SektorCard from './SektorCard';
import style from './sektors.module.css';

import {FaBuilding} from 'react-icons/fa6';

function Sektors() {
  return (
    <section className={`${style['sektors']}`}>
      <SektorCard label={'17 sektor ekonomi'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
      <SektorCard icon={<FaBuilding />} label={'Lorem ipsum'} />
    </section>
  );
}

export default Sektors;
