import React from "react";
import "./MyOrder.css";

const SingleMyOrder = () => {
  return (
    <div>
      <div className='max-w-lg lg:flex justify-center rounded-tl-lg rounded-tr-lg rounded-br-lg'>
        <div className='order_card h-48 lg:h-auto lg:w-48 flex-none text-center overflow-hidden'></div>
        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-2'>
            <div className='flex justify-between items-center'>
              <p className='text-gray-600'>Aug 18</p>

              <p className='w-10 h-10 text-center mb-2 px-1.5 py-1.5 bg-yellow-700 bg-opacity-70 text-white rounded-full'>
                11
              </p>
            </div>
            <p className='text-gray-700 overflow-hidden'>
              618d7b028c1f72c938b4826c
            </p>
            <div className='text-gray-900 font-bold text-xl mb-2'>
              Can coffee
            </div>
            <p className='text-gray-700 '>TransictionID:A54ADASD7156DSD</p>
            <p className='text-gray-700 '>Contact:01765414858</p>
          </div>
          <div className='flex items-center'>
            <div className='mx-auto flex justify-center items-center'>
              <button
                className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-90 my-2 md:my-0 bg-red-500 text-white'
                type='submit'
              >
                <i className='far fa-trash-alt'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMyOrder;
