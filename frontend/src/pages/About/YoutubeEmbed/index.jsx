import style from './youtubeEmbed.module.css';
import EmbedFrame from '../../../components/EmbedFrame';

function YoutubeEmbed() {
  return (
    <section className={`${style['youtube-embed']}`}>
      <EmbedFrame
        urlLink={'https://www.youtube.com/embed/pW-sHnkA0Hw?autoplay=0'}
      />
    </section>
  );
}

export default YoutubeEmbed;
