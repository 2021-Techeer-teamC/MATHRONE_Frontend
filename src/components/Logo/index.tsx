import * as React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
import { LogoText } from './style';

const Logo = () => {
  return (
    <LogoText size={30}>
      <Link to="/">
        MATHRONE
        <span className="logo__text--dot">
          <strong>.</strong>
        </span>
      </Link>
    </LogoText>
  );
}

export default Logo;
