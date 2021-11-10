import React from "react";
import SingleProduct from './SingleProduct'

const ExploreAllProducts = () => {
  return (
    <div className="py-16">
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Explore All Products
      </h1>
      <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
      </div>
    </div>
  );
};

export default ExploreAllProducts;
