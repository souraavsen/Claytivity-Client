import React from "react";
import ManageProduct from "./ManageProduct";

const ManageAllProducts = () => {
  return (
    <div className="pb-12">
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Manage All Products
      </h1>
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-16'>
        <ManageProduct></ManageProduct>
        <ManageProduct></ManageProduct>
        <ManageProduct></ManageProduct>
        <ManageProduct></ManageProduct>
      </div>
    </div>
  );
};

export default ManageAllProducts;
