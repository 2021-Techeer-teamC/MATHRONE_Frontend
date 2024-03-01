import * as React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
import { LogoText } from './style';

type LogoProps = {
  size?: number;
}

const Logo = ({size}: LogoProps) => {
  return (
    <LogoText size={size}>
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
