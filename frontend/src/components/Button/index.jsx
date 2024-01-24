/* eslint-disable react/prop-types */

import './buttonStyle.css';

import {Link} from 'react-router-dom';

function Button({href, children, className, size, form}) {
  if (href) {
    return (
      <Link
        className={`btn link ${className} ${size ? size : ''} ${
          form ? form : ''
        }`}
        to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${className} ${size ? size : ''} ${form ? form : ''}`}>
      {children}
    </button>
  );
}

export default Button;
