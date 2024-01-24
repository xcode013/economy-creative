/* eslint-disable react/prop-types */

import './pageheaderStyle.css';

import img2 from '../../assets/images/img2.jpg';

function PageHeader({content}) {
  return (
    <header className="pageheader">
      <img src={img2} alt="background" className="pageheader-background" />
      <h1 className="pageheader-content heading-md">{content}</h1>
    </header>
  );
}

export default PageHeader;
