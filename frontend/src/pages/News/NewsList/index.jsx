/* eslint-disable react/prop-types */
import {NewsCard} from '../../../components/Cards';

import './newslistStyle.css';

function NewsList({listData}) {
  return (
    <section className="news-list">
      {listData
        ? listData.map((news, index) => {
            return (
              <>
                <NewsCard
                  key={index}
                  authorPicture={news.newsProfile.authorPict}
                  authorName={news.newsProfile.authorName}
                  commentsCount={news.newsProfile.commentsCount}
                  image={news.image}
                  title={news.title}
                />
              </>
            );
          })
        : ''}
    </section>
  );
}

export default NewsList;
