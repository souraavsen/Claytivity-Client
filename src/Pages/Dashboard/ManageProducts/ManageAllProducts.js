import React from "react";
import ManageProduct from "./ManageProduct";

const ManageAllProducts = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Manage Products
      </h1>
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ManageProduct></ManageProduct>
      </div>
    </div>
  );
};

export default ManageAllProducts;
