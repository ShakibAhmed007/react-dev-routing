import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1> Product Details {params.productId}</h1>
    </section>
  );
};

export default ProductDetails;
