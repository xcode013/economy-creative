import './youtubeEmbedStyle.css';

function YouTubeEmbed() {
  return (
    <section className="youtube_embed">
      <iframe
        allowFullScreen
        className="video-embed"
        title="what"
        src="https://www.youtube.com/embed/xqm5f9mQQxw?autoplay=0"
      />
    </section>
  );
}

export default YouTubeEmbed;
