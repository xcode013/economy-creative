// import YouTubeEmbed from '../../../components/YouTubeEmbed';
import style from './youtubeEmbed.module.css';

import {FadeIn} from '../../../components/Animations';
import EmbedFrame from '../../../components/EmbedFrame';

function YoutubeEmbed() {
  return (
    <section className={`${style['youtube__embed']}`}>
      <FadeIn>
        <EmbedFrame
          urlLink={'https://www.youtube.com/embed/pW-sHnkA0Hw?autoplay=0'}
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <EmbedFrame
          urlLink={'https://www.youtube.com/embed/pW-sHnkA0Hw?autoplay=0'}
        />
      </FadeIn>
      <FadeIn delay={0.2}>
        <EmbedFrame
          urlLink={'https://www.youtube.com/embed/pW-sHnkA0Hw?autoplay=0'}
        />
      </FadeIn>
    </section>
  );
}

export default YoutubeEmbed;
