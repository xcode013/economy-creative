/* eslint-disable react/prop-types */

import style from './newsCard.module.css';

import {Link} from 'react-router-dom';
import {FaUser, FaComments, FaArrowRight} from 'react-icons/fa6';

function NewsCard({
  image,
  title,
  article,
  authorName,
  authorPicture,
  commentsCount,
}) {
  return (
    <>
      <div className={`${style['news__card']}`}>
        <Link to={'/'} className={`${style['news__card-header']}`}>
          <img src={image} alt="" className={`${style['header-img']}`} />
        </Link>
        <main className={`${style['news__card-body']}`}>
          <div className={`${style['body-profile__news']}`}>
            <img
              src={authorPicture}
              alt="profile picture"
              className={`${style['profile__news-profile__pict']}`}
            />
            <p className={`${style['profile__news-author__name']}`}>
              <FaUser />
              by {authorName}
            </p>
            <p className={`${style['profile__news-comments__count']}`}>
              <FaComments />
              {commentsCount} Comments
            </p>
          </div>
          <Link className={`${style['body-title']}`}>{title}</Link>
          <p className={`${style['body-article']}`}>{article}</p>
          <Link to={'/'} className={`${style['body-btn']}`}>
            <FaArrowRight />
          </Link>
        </main>
      </div>
    </>
  );
}

export default NewsCard;
