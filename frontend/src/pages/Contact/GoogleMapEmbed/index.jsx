import EmbedFrame from '../../../components/EmbedFrame';
import './googlemapembedStyle.css';

function GoogleMapEmbed() {
  return (
    <section className="googlemap__embed">
      <EmbedFrame
        urlLink={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.765614403838!2d111.89289227379452!3d-7.153076570172995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7781f2d2fd0e1d%3A0x19744eb38a0003a8!2sBOJONEGORO%20CREATIVE%20HUB%20(BCH)!5e0!3m2!1sid!2sid!4v1705720599611!5m2!1sid!2sid'
        }
        ratio={'1/.6'}
      />
    </section>
  );
}

export default GoogleMapEmbed;
