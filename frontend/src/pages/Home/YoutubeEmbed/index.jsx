// import YouTubeEmbed from '../../../components/YouTubeEmbed';
import style from './youtubeEmbed.module.css';

import {FadeIn} from '../../../components/Animations';

function YoutubeEmbed() {
  return (
    <section className={`${style['youtube__embed']}`}>
      <FadeIn>
        <iframe
          className={`${style.embed__video}`}
          title="what"
          src="https://www.youtube.com/embed/xqm5f9mQQxw?autoplay=0"
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <iframe
          className={`${style.embed__video}`}
          title="what"
          src="https://www.youtube.com/embed/xqm5f9mQQxw?autoplay=0"
        />
      </FadeIn>
      <FadeIn delay={0.2}>
        <iframe
          className={`${style.embed__video}`}
          title="what"
          src="https://www.youtube.com/embed/xqm5f9mQQxw?autoplay=0"
        />
      </FadeIn>
    </section>
  );
}

export default YoutubeEmbed;
