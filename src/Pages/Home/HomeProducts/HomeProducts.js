import React from "react";
import Product from "./Product";

const HomeProducts = () => {
  return (
    <div className='py-10'>
      <h1 className='text-center text-4xl font-semibold pb-12 mt-20'>
        Products
      </h1>
      <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default HomeProducts;
