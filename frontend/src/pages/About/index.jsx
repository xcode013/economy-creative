import RootLayout from '../layouts/RootLayout';
import PageHeader from '../../components/PageHeader';
import YoutubeEmbed from './YoutubeEmbed';
import Articles from './Articles';

import './aboutpageStyle.css';

function About() {
  return (
    <RootLayout>
      <PageHeader content={'About'} />
      <div id="aboutPage">
        <YoutubeEmbed />
        <Articles />
      </div>
    </RootLayout>
  );
}

export default About;
