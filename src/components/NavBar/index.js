import * as React from 'react';
import { Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { NavBarContainer } from './style.js';

function NavBar(props) {
  const sections = [
    { title: '소개', url: '/info' },
    { title: '문제집', url: '/workbook' },
    { title: '랭킹', url: '/rank' },
  ];

  return (
    <NavBarContainer maxWidth="sm">
      <Toolbar className="navbar" component="nav" variant="dense">
        {sections.map((section) => (
          <Link className="navbar-link" to={section.url}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </NavBarContainer>
  );
}

export default NavBar;
