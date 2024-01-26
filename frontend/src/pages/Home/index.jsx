import RootLayout from '../layouts/RootLayout';

import img1 from '../../assets/images/img1.jpg';

import ArticleNews from './ArticleNews';
import Collaboators from './Collaborators';

import HeroSection from './HeroSection';
import SectorSection from './SectorSection';
import JumbotronSection from './JumbotronSection';
import AboutSection from './AboutSection';
import HistorySection from './HistorySection';
import GallerySection from './GallerySection';
import YoutubeEmbedSection from './YoutubeEmbedSection';

import {FadeIn} from '../../components/Animations';

import './home.css';

function Home() {
  return (
    <RootLayout>
      <div id="homePage" className="home-page">
        <HeroSection />

        <SectorSection />

        <FadeIn direction="x" from="min">
          <JumbotronSection ImgBackground={img1} textButton={'Space Booking'}>
            Create and Collaboratins together at <br /> Bojonegoro Creative Hub
          </JumbotronSection>
        </FadeIn>

        <AboutSection />

        <FadeIn direction="x">
          <JumbotronSection
            ImgBackground={img1}
            textButton={'BCH Visit'}
            onRight={true}>
            Plan Your Visit to <br /> Bojonegoro Creative Hub
          </JumbotronSection>
        </FadeIn>

        <HistorySection />

        <GallerySection />

        <YoutubeEmbedSection />

        <ArticleNews />

        <Collaboators />
      </div>
    </RootLayout>
  );
}

export default Home;
