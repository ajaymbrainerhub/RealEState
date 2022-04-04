import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
import '../ProductList/ProductList.css';
function ProductList({ products }) {
  return (
    <div className='product-list'>
      {products &&
        products.map((product) => {
          return <ProductPreview product={product} key={product.id} />;
        })}
    </div>
  );
}

export default ProductList;
