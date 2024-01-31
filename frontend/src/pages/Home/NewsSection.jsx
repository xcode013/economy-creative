// Global-Components
import {FadeIn} from '../../components/Animations';

// Internal-Component
import {NewsSlider} from './HomeComponents';

// Internal-Assets
import {newsDatas} from '../../assets/datas/dummy';

function NewsSection() {
  return (
    <section className="news-section s-p">
      <header className="news-header">
        <FadeIn>
          <h2 className="header-subheading heading-sm">Creative Update News</h2>
        </FadeIn>
        <FadeIn delay={1}>
          <h1 className="header-heading heading-md">Articles & News</h1>
        </FadeIn>
      </header>
      <NewsSlider newsData={newsDatas} />
    </section>
  );
}

export default NewsSection;
