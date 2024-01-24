/* eslint-disable react/prop-types */

import Button from '../../../components/Button';
import './jumbotronStyle.css';

function Jumbotron({ImgBackground, contentPlacement, children, textButton}) {
  return (
    <section
      className={`jumbotron ${contentPlacement ? contentPlacement : 'left'}`}>
      <div className="jumbotron-container">
        <img
          src={ImgBackground}
          alt="booking room"
          className="jumbotron-background"
        />

        <div className="jumbotron-content">
          <h1 className="content-text">{children}</h1>
          <Button href={'/'} className={'primary'}>
            {textButton}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
