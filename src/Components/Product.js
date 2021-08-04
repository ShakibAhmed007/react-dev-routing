import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <p>Product Works </p>;
      <ul>
        <li>
          <Link to="/product/p1">A Book </Link>
        </li>
        <li>
          <Link to="/product/p2">A Book</Link>
        </li>
        <li>
          <Link to="/product/p3">A Book </Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
