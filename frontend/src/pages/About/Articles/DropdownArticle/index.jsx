/* eslint-disable react/prop-types */
import style from './dropdownArticle.module.css';

import {useState} from 'react';
import {FaChevronDown, FaChevronRight} from 'react-icons/fa6';

function DropdownArticle({title, article}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`${style['dropdown-article']}`}>
      <header
        onClick={() => setOpen((prev) => !prev)}
        className={`${style['dropdown-header']} heading-sm`}>
        <h1 className={`${style['dropdown-heading']}`}>{title}</h1>
        <i className={`${style['dropdown-icon']}`}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </i>
      </header>
      <article
        className={`${style['dropdown-body']} ${
          isOpen ? style['dropdown-body--active'] : ''
        } `}>
        <p className={`${style['dropdown-content']} paragraph-lg`}>{article}</p>
      </article>
    </div>
  );
}

export default DropdownArticle;
