/* eslint-disable react/prop-types */

import {Splide, SplideSlide} from '@splidejs/react-splide';
import NewsCard from '../../../../components/Cards/NewsCard';

function NewsListSlider({newsData}) {
  return (
    <Splide
      options={{
        rewind: true,
        drag: true,
        autoplay: true,
        snap: true,
        arrows: false,
        pagination: false,
        type: 'loop',
        gap: 10,
        mediaQuery: 'min',
        perPage: 1,
        perMove: 1,
        breakpoints: {
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
        },
      }}>
      {newsData
        ? newsData.map((news, index) => {
            return (
              <>
                <SplideSlide key={index}>
                  <NewsCard
                    authorPicture={news.newsProfile.authorPict}
                    authorName={news.newsProfile.authorName}
                    commentsCount={news.newsProfile.commentsCount}
                    image={news.image}
                    title={news.title}
                    article={news.article}
                  />
                </SplideSlide>
              </>
            );
          })
        : 'Data not Found'}
    </Splide>
  );
}

export default NewsListSlider;
