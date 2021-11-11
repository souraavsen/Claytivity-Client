import React from "react";
import { Link } from "react-router-dom";
// for displaying rating in star
import ReactStars from "react-rating-stars-component";

const ManageProduct = () => {
  return (
    <div>
      <div className='mx-auto'>
        <div className='mt-10 z-0 px-2 pb-4 bg-white border-2 flex flex-col items-center justify-center shadow-md rounded-bl-xl rounded-br-xl'>
          <div>
            <img
              // src={plan.image ? plan.image : service}
              src='https://i.ibb.co/r21j6T9/Plants-and-Pottery.webp'
              className='h-48 w-56 z-30 shadow-md mb-2 -mt-8 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg'
              alt=''
            />
          </div>
          {/* <h2 className='text-center font-bold text-lg'>{plan.name}</h2> */}
          <h2 className='text-center px-3 font-bold text-lg'>Potter Name</h2>
          <h2 className='text-justify px-3 text-sm'>
            {/* {plan.description.slice(0, 50)}... */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores quis consequatur sapiente doloribus non iusto numquam earum
            adipisci? Recusandae nihil qui repudiandae voluptas at, vero ipsam
            veritatis.
          </h2>

          <div className='mx-auto pt-2 flex justify-center items-center'>
            <button
              className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-60'
              type='submit'
            >
              <i class='far fa-edit'></i>
            </button>
            <button
              className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-60'
              type='submit'
            >
              <i class='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
