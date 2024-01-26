/* eslint-disable react/prop-types */

import {Splide, SplideSlide} from '@splidejs/react-splide';

import './creativefloorslideStyle.css';

function CreativeFloorSlide({title, slideDatas}) {
  return (
    <div className="creativefloorslide">
      <h2 className="creativefloorslide-headline heading-sm">{title}</h2>
      <main>
        <Splide
          options={{
            rewind: true,
            drag: true,
            autoplay: true,
            snap: true,
            arrows: false,
            type: 'loop',
          }}>
          {slideDatas
            ? slideDatas.map((data, index) => {
                return (
                  <SplideSlide key={index}>
                    <img
                      src={data.bgImg}
                      alt="images"
                      className="creativefloorslide-background"
                    />
                    <main className="creativefloorslide-content">
                      <article>
                        <main>
                          <h1 className="content-headline">{data.headline}</h1>
                          <p className="content-description">
                            {data.description}
                          </p>
                        </main>
                      </article>
                    </main>
                  </SplideSlide>
                );
              })
            : ''}
        </Splide>
      </main>
    </div>
  );
}

export default CreativeFloorSlide;
