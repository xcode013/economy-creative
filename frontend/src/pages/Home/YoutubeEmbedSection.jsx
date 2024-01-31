// import YouTubeEmbed from '../../../components/YouTubeEmbed';

import {FadeIn} from '../../components/Animations';
import EmbedFrame from '../../components/EmbedFrame';

function YoutubeEmbedSection() {
  return (
    <section className={`embed-youtube-section s-p`}>
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

export default YoutubeEmbedSection;
