// Globa-Component
import {FadeIn} from '../../components/Animations';

// Assets
import img1 from '../../assets/images/img1.jpg';
import './home.css';

import HeroSection from './HeroSection';
import SectorSection from './SectorSection';
import JumbotronSection from './JumbotronSection';
import AboutSection from './AboutSection';
import HistorySection from './HistorySection';
import GallerySection from './GallerySection';
import YoutubeEmbedSection from './YoutubeEmbedSection';
import NewsSection from './NewsSection';
import CollaborationSection from './Collaboration';

function Home() {
  return (
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

      <NewsSection />

      <CollaborationSection />
    </div>
  );
}

export default Home;
