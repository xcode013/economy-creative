import RootLayout from '../layouts/RootLayout';
import PageHeader from '../../components/PageHeader';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import Articles from './Articles';

import './aboutpageStyle.css';

function About() {
  return (
    <RootLayout>
      <PageHeader content={'About'} />
      <div id="aboutPage">
        <YouTubeEmbed />
        <Articles />
      </div>
    </RootLayout>
  );
}

export default About;
