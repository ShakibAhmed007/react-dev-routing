import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/welcome">Welcome</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
