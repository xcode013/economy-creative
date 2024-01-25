import SektorCard from './SektorCard';
import style from './sektors.module.css';
import {FaBuilding} from 'react-icons/fa6';

function Sektors() {
  return (
    <section className={`${style['sektor']}`}>
      <header className={`${style['sektor-header']}`}>
        <h1 className={`${style['sektor-heading']} heading-md`}>
          17 Sektor Ekonomi
        </h1>
      </header>

      <main className={`${style['sektor-body']}`}>
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
      </main>
    </section>
  );
}

export default Sektors;
