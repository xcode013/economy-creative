import {DropdownArticle} from './aboutComponent';

function Article() {
  return (
    <section className="article-section s-p--md">
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
        <p className="about-paragraph paragraph-lg">
          Secara konseptual fungsi bangunan MCC juga terbagi 2, yaitu Area
          Empowerment dan Area Komersial dengan proporsi sebanyak 60%
          dialokasikan untuk Area Empowerment.
        </p>
      </article>

      <aside className="article-dropdown">
        <DropdownArticle
          title={'Lorem ipsum dolor'}
          article={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
          }
        />
        <DropdownArticle
          title={'Lorem ipsum dolor'}
          article={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
          }
        />
        <DropdownArticle
          title={'Lorem ipsum dolor'}
          article={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
          }
        />
      </aside>
    </section>
  );
}

export default Article;
