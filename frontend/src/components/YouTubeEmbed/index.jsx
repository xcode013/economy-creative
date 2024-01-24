import style from './youtubeEmbed.module.css';

function YouTubeEmbed() {
  return (
    <section className={`${style.youtube__embed}`}>
      <iframe
        allowFullScreen
        className={`${style.embed__video}`}
        title="what"
        src="https://www.youtube.com/embed/xqm5f9mQQxw?autoplay=0"
      />
    </section>
  );
}

export default YouTubeEmbed;
