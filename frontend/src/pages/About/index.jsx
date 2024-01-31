import PageHeader from '../../components/PageHeader';

import EmbedYoutube from './EmbedYoutube';
import Article from './Article';

import './about.css';

function About() {
  return (
    <div className="about-page">
      <PageHeader content={'About'} />
      <main className="about-body">
        <EmbedYoutube />
        <Article />
      </main>
    </div>
  );
}

export default About;
