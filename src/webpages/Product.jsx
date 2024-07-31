import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { BreadCrum } from '../components/BreadCrums/BreadCrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);
  const product = all_product.find((e) => e.id === Number(productId));

  // Debugging: Log the product to see what is retrieved
  useEffect(() => {
    console.log('Product:', product);
  }, [product]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <BreadCrum product={product} />
      <div className="product-details">
        
        
       
        {/* Render other product details */}
      </div>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      </div>
  );
};
