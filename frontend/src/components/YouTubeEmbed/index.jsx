/* eslint-disable react/prop-types */
import style from './youtubeEmbed.module.css';

function YouTubeEmbed({urlId = 'xqm5f9mQQxw'}) {
  return (
    <section className={`${style.youtube__embed}`}>
      <iframe
        allowFullScreen
        className={`${style.embed__video}`}
        title="what"
        src={`https://www.youtube.com/embed/${urlId}?autoplay=0`}
      />
    </section>
  );
}

export default YouTubeEmbed;
