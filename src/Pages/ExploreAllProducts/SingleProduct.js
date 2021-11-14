import React from "react";
import { Link } from "react-router-dom";
// for displaying rating in star
import ReactStars from "react-rating-stars-component";
import "./ExploreAllProducts.css";
import useAuth from '../../Hooks/useAuth'

const SingleProduct = ({ product }) => {

  const {admin} = useAuth()

  return (
    <div className='mx-auto'>
      <div className='mt-10 z-0 px-2 pb-4 bg-white border-2 flex flex-col items-center justify-center shadow-md rounded-bl-xl rounded-br-xl'>
        <div>
          <img
            // src={plan.image ? plan.image : service}
            src={product.img}
            className='h-48 w-56 z-30 shadow-md mb-2 -mt-8 border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-white p-2'
            alt=''
          />
        </div>
        <div className='flex justify-between items-center -mt-12'>
          <h2 className='text-left float-left px-4 py-1 ml-2 md:ml-6 font-bold text-white text-sm md:text-md bg_mud rounded-tl-lg rounded-br-lg'>
            {product.product_name}
          </h2>
          <div className='price mb-8 ml-6 left-3/4'>
            <p className='text-base font-extrabold flex'>
              {/* Price: */}
              <span className='max-w-32 text-xs md:text-sm text-black pl-5 pr-3 bg_price py-1'>
                $ {product.price}
              </span>
            </p>
          </div>
        </div>
        <h2 className='text-justify px-4 2xl:px-12 text-sm'>
          {product.description.slice(0, 60)}...
        </h2>

        <div>
          <p className='text-base py-1 flex'>
            {/* <span className='mr-2'>Rating:</span> */}
            <ReactStars
              count={5}
              size={24}
              value={product.rating}
              edit={false}
              isHalf={true}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              activeColor='#ffd700'
            />
            <span className='ml-1'>
              {product.rating} ({product.total_ratings})
            </span>
          </p>
        </div>
        {admin ? (
          <Link
            to={`/product-details/${product._id}`}
            className='explore_btn mt-3 text-black font-semibold py-1 rounded'
          >
            <button className='productbtn mx-auto'>
              <span aria-hidden='true' className='circle'>
                <span className='icon arrow'></span>
              </span>
              <span className='productbtn-text'>Details</span>
            </button>
          </Link>
        ) : (
          <Link
            to={`/product-details/${product._id}`}
            className='explore_btn mt-3 text-black font-semibold py-1 rounded'
          >
            <button className='productbtn mx-auto'>
              <span aria-hidden='true' className='circle'>
                <span className='icon arrow'></span>
              </span>
              <span className='productbtn-text text-center'>Purchase</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
