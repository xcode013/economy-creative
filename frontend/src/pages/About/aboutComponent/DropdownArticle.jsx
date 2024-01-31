/* eslint-disable react/prop-types */

import {useState} from 'react';
import {FaChevronDown, FaChevronRight} from 'react-icons/fa6';

function DropdownArticle({title, article}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={`dropdown-article`}>
      <header
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`dropdown-header heading-sm`}>
        <h1 className={`header-heading`}>{title}</h1>
        <i className={`header-icon`}>
          {isDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
        </i>
      </header>
      <article
        className={`dropdown-body ${
          isDropdownOpen ? 'dropdown-body--active' : ''
        } `}>
        <p className={`body-content paragraph-lg`}>{article}</p>
      </article>
    </div>
  );
}

export default DropdownArticle;
