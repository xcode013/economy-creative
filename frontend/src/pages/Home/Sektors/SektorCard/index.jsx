/* eslint-disable react/prop-types */
import style from './sektorCard.module.css';

function SektorCard({icon, label}) {
  if (!icon) {
    return (
      <div className={`${style['card-sektor']}`}>
        <h4 className={`${style['card-label']}`}>{label}</h4>
        
      </div>
    );
  }
  return (
    <div
      className={`${style['card-sektor']} ${style['card-sektor--with-icon']}`}>
      <i className={`${style['card-icon']}`}>{icon}</i>
      <div className={`${style['card-line-decoration']}`}></div>
      <h5 className={`${style['card-label']}`}>sektor</h5>
      <h4 className={`${style['card-label--main']}`}>{label}</h4>
    </div>
  );
}

export default SektorCard;
