import RootLayout from '../layouts/RootLayout';

import img1 from '../../assets/images/img1.jpg';

import Hero from './Hero';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import Jumbotron from './Jumbotron';
import About from './About';
import History from './History';
import Gallery from './Gallery';
import ArticleNews from './ArticleNews';
import Collaboators from './Collaborators';

import {FadeIn} from '../../components/Animations';

function Home() {
  return (
    <RootLayout>
      <div id="homePage" style={{overflowX: 'hidden'}}>
        <Hero />

        <YouTubeEmbed />

        <FadeIn direction="x" from="min">
          <Jumbotron ImgBackground={img1} textButton={'Space Booking'}>
            Create and Collaboratins together at <br /> Bojonegoro Creative Hub
          </Jumbotron>
        </FadeIn>

        <About />

        <FadeIn direction="x">
          <Jumbotron
            ImgBackground={img1}
            textButton={'BCH Visit'}
            contentPlacement={'right'}>
            Plan Your Visit to <br /> Bojonegoro Creative Hub
          </Jumbotron>
        </FadeIn>

        <History />

        <Gallery />

        <ArticleNews />

        <Collaboators />
      </div>
    </RootLayout>
  );
}

export default Home;
