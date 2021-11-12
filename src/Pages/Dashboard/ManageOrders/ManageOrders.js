import React from "react";
import SingleOrder from "./SingleOrder";

const ManageOrders = () => {
  return (
    <div className='lg:py-16'>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Manage All Orders
      </h1>
      <div className='w-full md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
        <SingleOrder></SingleOrder>
        <SingleOrder></SingleOrder>
        <SingleOrder></SingleOrder>
      </div>
    </div>
  );
};

export default ManageOrders;
