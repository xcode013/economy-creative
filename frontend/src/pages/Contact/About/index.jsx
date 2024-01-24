import img1 from '../../../assets/images/img1.jpg';
import brandLogo from '../../../assets/react.svg';

import './aboutStyle.css';

function About() {
  return (
    <section className="about">
      <header className="about-banner">
        <img src={img1} alt="banner" className="banner-img" />
      </header>

      <main className="about-content">
        <header className="content-brand">
          <img src={brandLogo} alt="logo" className="brand-logo" />
          <h1 className="brand-type">BCH</h1>
        </header>
        <main className="content-article paragraph-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          velit quo quibusdam atque neque nulla saepe, quas dignissimos est
          repudiandae sit culpa ratione, voluptatum a, expedita quos nisi
          repellat sunt. Accusantium eaque tempore repellendus perferendis
          beatae! Sequi odio necessitatibus pariatur nemo. Pariatur facilis quis
          excepturi, praesentium nisi temporibus reprehenderit debitis voluptas
          amet quasi quaerat adipisci error in eum odit odio! Velit delectus eum
          exercitationem maiores. Nulla, voluptates voluptatum totam dolor
          doloribus quaerat, error impedit repudiandae aperiam possimus aliquam
          culpa laboriosam veniam recusandae inventore dolore velit earum
          voluptas omnis explicabo cum?
        </main>
      </main>
    </section>
  );
}

export default About;
