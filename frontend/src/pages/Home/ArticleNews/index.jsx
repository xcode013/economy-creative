import NewsListSlider from './NewsListSlider';

import {newsDatas} from '../../../assets/datas/dummy';
import './articlenewsStyle.css';
import {FadeIn} from '../../../components/Animations';

function ArticleNews() {
  return (
    <section className="articles">
      <header>
        <FadeIn>
          <h2 className="subheadline heading-sm">Creative Updates</h2>
        </FadeIn>
        <FadeIn delay={1}>
          <h1 className="headline heading-md">Articles & News</h1>
        </FadeIn>
      </header>
        <NewsListSlider newsData={newsDatas} />
    </section>
  );
}

export default ArticleNews;
