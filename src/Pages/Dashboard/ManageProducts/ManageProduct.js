import React from "react";
import { Link } from "react-router-dom";
// for displaying rating in star
import ReactStars from "react-rating-stars-component";

const ManageProduct = () => {
  return (
    <div className='mx-auto'>
      <div className='mt-10 z-0 px-2 pb-4 bg-white border-2 flex flex-col items-center justify-center shadow-md rounded-bl-xl rounded-br-xl'>
        <div>
          <img
            // src={plan.image ? plan.image : service}
            src='https://i.ibb.co/r21j6T9/Plants-and-Pottery.webp'
            className='w-4/6 h-44 mx-auto z-30 shadow-md mb-2 -mt-8 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg'
            alt=''
          />
        </div>
        {/* <h2 className='text-center font-bold text-lg'>{plan.name}</h2> */}
        <h2 className='text-center px-3 font-bold text-lg'>Potter Name</h2>
        <h2 className='text-justify px-6 2xl:px-12 text-sm'>
          {/* {plan.description.slice(0, 50)}... */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          maiores quis consequatur sapiente doloribus non iusto numquam earum
          adipisci? Recusandae nihil qui repudiandae voluptas at, vero ipsam
          veritatis.
        </h2>

        <p className='my-1 font-bold'>Price: $106</p>

        <div className='mx-auto pt-2 flex justify-center items-center'>
          <button
            className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-green-500 text-white '
            type='submit'
          >
            <i class='far fa-edit'></i>
          </button>
          <button
            className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-red-500 text-white'
            type='submit'
          >
            <i class='far fa-trash-alt'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
