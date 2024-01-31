import {FadeIn} from '../../components/Animations';
import {FacilityItemList} from './HomeComponents';

function AboutSection() {
  const facilityList = [
    'High Speed Internet',
    'Fully Air Conditioned Rooms',
    'Cleaning Service',
    'Functional Hall',
    'Entertainment Rooftop',
  ];
  return (
    <section className="about-section s-p--md">
      <div className="about-content">
        <FadeIn>
          <h1 className="content-heading heading-md">
            Bojonegoro creative city and creative culture ambience
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="content-text paragraph-lg">
            Bojonegoro Creative Hub or BCH is a form of contribution of the
            Bojonegoro City Government through the Department of Industry and
            Trade Cooperatives in managing and maintaining the Creative Economy
            ecosystem in Bojonegoro City. BCH will be a forum for EKRAF actors
            in Bojonegoro City to be able to collaborate and grow together
            between Creative Industries.
          </p>
        </FadeIn>
      </div>
      <ul className="about-facility">
        {facilityList.map((item, idx) => {
          return (
            <>
              <FacilityItemList inAnimationDelay={idx} key={idx}>
                {item}
              </FacilityItemList>
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default AboutSection;
