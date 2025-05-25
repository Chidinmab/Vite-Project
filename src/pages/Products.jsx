import React from 'react';
import ProductCard from '../component/ProductCard';

const Products = () => {
  return (
      <section className='px-7 py-5 h-screen bg-gradient-to-r from-green-500 via-blue-200 to-red-500 flex gap-4'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>   
     </section>
  )
};

export default Products;