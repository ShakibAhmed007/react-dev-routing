import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
