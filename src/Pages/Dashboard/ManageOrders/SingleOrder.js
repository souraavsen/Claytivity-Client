import React, { useState } from "react";

const SingleOrder = () => {


  return (
    <div className='container mx-auto'>
      <div className=' md:mt-10 px-2 pb-4 bg-white border-2 md:flex justify-between items-center shadow-md rounded-bl-xl rounded-br-xl'>
        {/* <img
            src='https://i.ibb.co/r21j6T9/Plants-and-Pottery.webp'
            className='h-48 w-56 z-30 shadow-md mb-2 ml-2 mt-6 md:-mt-20 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg'
            alt=''
          /> */}

        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='card h-48 w-56 shadow-md ml-2 -mt-16 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-dark text-white'>
            <img
              className='card-img h-48 w-56'
              src='https://i.ibb.co/r21j6T9/Plants-and-Pottery.webp'
              alt='Card image'
            />
            <div className='card-img-overlay bg-gray-900 bg-opacity-50'>
              <h5 className='card-title'>Pottery Item</h5>
              <p className='card-text'>
                This is a wider card with supporting text below
              </p>
              <p className='card-text'>Price: 1006</p>
            </div>
          </div>
          <h2 className='px-2 font-semibold my-6'>
            Status:{" "}
            <span className='px-3 py-0.5 bg-red-400 text-white rounded-full'>
              Painding
            </span>
          </h2>
          <h2 className='px-2 font-semibold'>
            Quantity:{" "}
            <span className='px-1.5 py-1.5 bg-yellow-700 bg-opacity-70 text-white rounded-full'>
              10
            </span>
          </h2>
        </div>
        {/* <h2 className='text-center font-bold text-lg'>{plan.name}</h2> */}
        <div className='w-72 px-3 mx-auto mt-3 flex flex-col '>
          <h2 className='text-center font-extrabold text-lg italic'>-By</h2>
          <h2 className='text-center font-semibold text-md'>
            Sourav Sen Gupta
          </h2>
          <h2 className='px-2 py-2 text-base'>
            <span className='text-left font-semibold'>Contact:</span>0175414858
          </h2>
          <h2 className='px-2 pb-2 font-semibold'>Transiction ID:0 aswe</h2>
          <h2 className='px-2 pb-2 font-semibold'>Date:</h2>

          <div className='mx-auto pt-2 flex justify-center items-center'>
            <button
              className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-green-500 text-white '
              type='submit'
            >
              <i class='far fa-check-circle'></i>
            </button>
            <button
              className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-red-500 text-white'
              type='submit'
            >
              <i className='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
