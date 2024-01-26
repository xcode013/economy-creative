import {FaPenFancy, FaPeopleGroup} from 'react-icons/fa6';
import img1 from '../../assets/images/img1.jpg';
import Button from '../../components/Button';
import {FadeIn} from '../../components/Animations';

function HistorySection() {
  return (
    <section className="history-section">
      <header className="history-header">
        <FadeIn direction="x" from={'min'}>
          <div className="header-banner">
            <img src={img1} alt="" className="banner-background" />
            <div className="banner-content">
              <h1 className="content-text">More than 60 spaces available</h1>
            </div>
          </div>
        </FadeIn>
        <div className="header-link">
          <FadeIn direction="x" from={'min'} delay={0.3}>
            <Button href={'/'} className={'link-btn'}>
              <i className="btn-icon">
                <FaPeopleGroup />
              </i>
              <p className="btn-text">
                Ruang <br /> kolaborasi
              </p>
            </Button>
          </FadeIn>
          <FadeIn direction="x" from={'min'} delay={0.6}>
            <Button href={'/'} className={'link-btn'}>
              <i className="btn-icon">
                <FaPenFancy />
              </i>
              <p className="btn-text">
                Ruang <br /> kreatif
              </p>
            </Button>
          </FadeIn>
        </div>
      </header>

      <main className="history-body">
        <FadeIn>
          <h1 className="body-headline heading-md">History</h1>
        </FadeIn>
        <FadeIn>
          <p className="body-text paragraph-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            labore iste ipsum dolorum nam laboriosam. Quaerat possimus, autem
            error blanditiis aliquam non. Omnis dolorum hic sint natus earum
            placeat quam? Delectus iure, facere sunt nihil tenetur ipsam minus
            labore ullam voluptatum ad quidem rerum quo esse, eos ea
            repellendus. Nihil dignissimos debitis illum, ullam officiis dolore
            rerum ipsum aspernatur blanditiis. Totam alias rem, cumque eveniet
            ad tenetur optio ullam laudantium quaerat illum vel saepe ipsum hic
            amet possimus facilis in, ab eos neque doloribus id voluptate velit.
          </p>
        </FadeIn>
      </main>
    </section>
  );
}

export default HistorySection;
