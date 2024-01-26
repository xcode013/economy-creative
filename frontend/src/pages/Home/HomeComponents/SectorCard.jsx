/* eslint-disable react/prop-types */

function SectorCard({icon, label}) {
  return (
    <div className={`card-sector card-sector`}>
      <i className={`card-icon`}>{icon}</i>
      <div className={`card-line-decoration`}></div>
      <h5 className={`card-label`}>sector</h5>
      <h4 className={`card-label--main`}>{label}</h4>
    </div>
  );
}

export default SectorCard;
