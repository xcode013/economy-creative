import {useState} from 'react';

import {FaChevronDown} from 'react-icons/fa6';

import './articleStyle.css';

function Articles() {
  const [isOpenDD1, setOpenDD1] = useState(false);
  const [isOpenDD2, setOpenDD2] = useState(false);
  const [isOpenDD3, setOpenDD3] = useState(false);

  return (
    <section className="article">
      <article className="article-about">
        <p className="about-paragraph paragraph-lg">
          Malang Creative Center (MCC) adalah pusat kegiatan bagi pelaku yang
          aktif di sektor industri kreatif. Tujuan utamanya adalah untuk
          memberdayakan dan mengembangkan potensi sumber daya manusia (SDM)
          dalam industri kreatif dengan menyediakan fasilitas penunjang yang
          memadai. MCC memainkan peran penting dalam mendorong pertumbuhan
          merata di setiap sektor ekonomi kreatif yang tergabung dalam 17
          sub-sektor ekonomi kreatif yaitu arsitektur, film, fotografi, kriya,
          kuliner, seni rupa, produk, aplikasi, game, televisi dan radio,
          fashion, pertunjukan, desain interior, periklanan, penerbitan, DKV,
          dan musik, sambil tetap memperhatikan kepentingan budaya sebagai
          warisan berharga.
        </p>
        <p className="about-paragraph paragraph-lg">
          Dalam pembangunan gedung MCC yang memiliki delapan lantai ini,
          Pemerintah Kota Malang tetap berkomitmen untuk melestarikan
          unsur-unsur sejarah dan budaya yang menjadi ciri khas Kota Malang.
          Desain arsitektur megah gedung ini merupakan replika dari Candi Badut,
          salah satu candi tertua di Jawa Timur. Keputusan untuk mengambil Candi
          Badut sebagai model dalam pembangunan MCC didasarkan pada nilai-nilai
          yang sesuai untuk memajukan pusat kreativitas MCC.
        </p>
        <p className="about-paragraph paragraph-lg">
          MCC memiliki tagline “Creative Culture Ambience” dengan tujuan
          menciptakan lingkungan budaya kreatif yang mencerminkan identitas
          Malang dan dikenal baik di tingkat Nasional maupun Internasional.
          Pemerintah berharap bahwa keberadaan MCC akan menjadi fasilitas yang
          mendukung semua sub-sektor dalam industri kreatif dan menjadi
          pendorong utama dalam pengembangan ekonomi kreatif di Kota Malang.
        </p>
        <p className="about-paragraph">
          Secara konseptual fungsi bangunan MCC juga terbagi 2, yaitu Area
          Empowerment dan Area Komersial dengan proporsi sebanyak 60%
          dialokasikan untuk Area Empowerment.
        </p>
      </article>

      <ul className="article-dropdown">
        <li className="dropdown-item">
          <header onClick={() => setOpenDD1((prev) => !prev)}>
            <h1 className="item-headline">Lorem ipsum dolor</h1>
            <i className={`item-icon ${isOpenDD1 ? 'opened' : ''}`}>
              <FaChevronDown />
            </i>
          </header>
          <article>
            <p
              className={`item-paragraph paragraph ${
                isOpenDD1 ? 'opened' : ''
              }`}>
              <strong>Lorem ipsum dolor</strong> sit amet consectetur
              adipisicing elit. Voluptas eos perferendis soluta ipsam officiis
              provident ducimus, vitae molestiae commodi, ratione, nam
              laboriosam dolorem ipsum cupiditate quos atque iusto doloribus?
              Suscipit cupiditate vel iste iusto quis voluptatem alias
              voluptatum quia, culpa asperiores? Natus fuga necessitatibus,
              voluptatum nesciunt earum repellendus quis quasi!
            </p>
          </article>
        </li>
        <li className="dropdown-item">
          <header onClick={() => setOpenDD2((prev) => !prev)}>
            <h1 className="item-headline">Lorem ipsum dolor</h1>
            <i className={`item-icon ${isOpenDD2 ? 'opened' : ''}`}>
              <FaChevronDown />
            </i>
          </header>
          <article>
            <p
              className={`item-paragraph paragraph ${
                isOpenDD2 ? 'opened' : ''
              }`}>
              <strong>Lorem ipsum dolor</strong> sit amet consectetur
              adipisicing elit. Voluptas eos perferendis soluta ipsam officiis
              provident ducimus, vitae molestiae commodi, ratione, nam
              laboriosam dolorem ipsum cupiditate quos atque iusto doloribus?
              Suscipit cupiditate vel iste iusto quis voluptatem alias
              voluptatum quia, culpa asperiores? Natus fuga necessitatibus,
              voluptatum nesciunt earum repellendus quis quasi!
            </p>
          </article>
        </li>
        <li className="dropdown-item">
          <header onClick={() => setOpenDD3((prev) => !prev)}>
            <h1 className="item-headline">Lorem ipsum dolor</h1>
            <i className={`item-icon ${isOpenDD3 ? 'opened' : ''}`}>
              <FaChevronDown />
            </i>
          </header>
          <article>
            <p
              className={`item-paragraph paragraph ${
                isOpenDD3 ? 'opened' : ''
              }`}>
              <strong>Lorem ipsum dolor</strong> sit amet consectetur
              adipisicing elit. Voluptas eos perferendis soluta ipsam officiis
              provident ducimus, vitae molestiae commodi, ratione, nam
              laboriosam dolorem ipsum cupiditate quos atque iusto doloribus?
              Suscipit cupiditate vel iste iusto quis voluptatem alias
              voluptatum quia, culpa asperiores? Natus fuga necessitatibus,
              voluptatum nesciunt earum repellendus quis quasi!
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Articles;
