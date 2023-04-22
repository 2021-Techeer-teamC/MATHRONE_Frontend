import * as React from 'react';
import { Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { NavBarContainer } from './style.js';

function NavBar(props) {
  const { sections } = props;

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
