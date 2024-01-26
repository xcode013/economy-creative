/* eslint-disable react/prop-types */
import {FaCheck} from 'react-icons/fa6';
import {FadeIn} from '../../../components/Animations';

function FacilityItemList({children, inAnimationDelay}) {
  return (
    <FadeIn delay={`0.${inAnimationDelay}`} direction="x">
      <li className="facility-item">
        <div className="item-icon">
          <FaCheck />
        </div>{' '}
        {children}
      </li>
    </FadeIn>
  );
}

export default FacilityItemList;
