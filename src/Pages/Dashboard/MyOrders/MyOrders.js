import React from 'react'
import { Link } from 'react-router-dom';
import SingleMyOrder from './SingleMyOrder';

const MyOrders = () => {
  return (
    <div className='pt-24 pb-12'>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        My Orders
      </h1>
      <div className=' md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
        <SingleMyOrder></SingleMyOrder>
        <SingleMyOrder></SingleMyOrder>
        <SingleMyOrder></SingleMyOrder>
      </div>
    </div>
  );
};

export default MyOrders;
