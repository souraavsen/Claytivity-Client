import React from "react";
import { Link } from "react-router-dom";
// for displaying rating in star
import ReactStars from "react-rating-stars-component";

const ManageProduct = ({ product, deleteProduct, editProduct }) => {
  return (
    <div className='mx-auto'>
      <div className='mt-10 z-0 px-2 pb-4 bg-white border-2 flex flex-col items-center justify-center shadow-md rounded-bl-xl rounded-br-xl'>
        <div>
          <img
            src={product.img}
            className='w-48 h-44 p-2 bg-white mx-auto z-30 shadow-md mb-2 -mt-8 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg'
            alt=''
          />
        </div>
        <h2 className='text-center px-3 my-2 font-bold text-lg'>
          {product.product_name}
        </h2>
        <h2 className='text-justify px-6 2xl:px-12 text-sm'>
          {product.description.slice(0, 60)}...
        </h2>

        <p className='my-2 font-bold'>Price: ${product.price}</p>

        <div className='mx-auto pt-2 flex justify-center items-center'>
          <button
            className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-green-500 text-white '
            type='submit'
            onClick={() => {
              editProduct(product._id);
            }}
          >
            <i className='far fa-edit'></i>
          </button>
          <button
            className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-red-500 text-white'
            type='submit'
            onClick={() => {
              deleteProduct(product._id);
            }}
          >
            <i className='far fa-trash-alt'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
