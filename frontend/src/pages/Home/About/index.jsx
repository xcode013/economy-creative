import {FaCheck} from 'react-icons/fa6';
import './aboutStyle.css';

import {FadeIn} from '../../../components/Animations';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <FadeIn>
          <h1 className="content-heading heading-md">
            Bojonegoro creative city and creative culture ambience
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="content paragraph-lg">
            Bojonegoro Creative Hub or BCH is a form of contribution of the
            Bojonegoro City Government through the Department of Industry and
            Trade Cooperatives in managing and maintaining the Creative Economy
            ecosystem in Bojonegoro City. BCH will be a forum for EKRAF actors
            in Bojonegoro City to be able to collaborate and grow together
            between Creative Industries.
          </p>
        </FadeIn>
      </div>
      <FadeIn direction="x">
        <ul className="fasillities">
          <li className="fisillity-item">
            <div className="icon">
              <FaCheck />
            </div>{' '}
            High Speed Internet
          </li>
          <li className="fisillity-item">
            <div className="icon">
              <FaCheck />
            </div>{' '}
            Fully Air Conditioned Rooms
          </li>
          <li className="fisillity-item">
            <div className="icon">
              <FaCheck />
            </div>{' '}
            Cleaning Service
          </li>
          <li className="fisillity-item">
            <div className="icon">
              <FaCheck />
            </div>{' '}
            Functional Hall
          </li>
          <li className="fisillity-item">
            <div className="icon">
              <FaCheck />
            </div>{' '}
            Entertainment Rooftop
          </li>
        </ul>
      </FadeIn>
    </section>
  );
}

export default About;
