/* eslint-disable react/prop-types */

import './facilitycardStyle.css';

function FacilityCard({icon, facilityName, facilityPlace}) {
  return (
    <div className="facility-card">
      <i className="card-icon">{icon}</i>
      <h1 className="card-headline heading-sm">{facilityName}</h1>
      <h2 className="card-subheading paragraph">{facilityPlace}</h2>
    </div>
  );
}

export default FacilityCard;
