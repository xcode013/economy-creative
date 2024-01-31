import EmbedFrame from '../../components/EmbedFrame';

function EmbedYoutube() {
  return (
    <section className={`embed-youtube s-p`}>
      <EmbedFrame
        urlLink={'https://www.youtube.com/embed/pW-sHnkA0Hw?autoplay=0'}
      />
    </section>
  );
}

export default EmbedYoutube;
