import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navbar.item';
import styles from './navbar.styles';

export const NavBar = () => (
  <div className={styles.root}>
    {navItems.map(
      ({ name, to }) => (
        <NavLink
          key={name}
          className={({ isActive }) => styles.navItem + (isActive ? ' ' + styles.activeItem : '')}
          to={to}
        >
          {name}
        </NavLink>
      ),
    )}
  </div>
);
