/* eslint-disable react/prop-types */
import style from './embedFrame.module.css';

function EmbedFrame({urlLink, ratio}) {
  return (
    <div className={`${style['frame-embed']}`}>
      <iframe
        className={`${style['frame-content']}`}
        src={`${urlLink}`}
        style={{border: '0px', aspectRatio: `${ratio ? ratio : '1/.7'}`}}
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
}

export default EmbedFrame;
