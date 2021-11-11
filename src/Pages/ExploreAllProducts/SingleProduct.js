import React from 'react'
import { Link } from "react-router-dom";
// for displaying rating in star
import ReactStars from "react-rating-stars-component";
import './ExploreAllProducts.css'

const SingleProduct = () => {
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
              maiores quis consequatur sapiente doloribus non iusto numquam
              earum adipisci? Recusandae nihil qui repudiandae voluptas at, vero
              ipsam veritatis. Iure fuga ratione odio laudantium consequatur.
              Mollitia architecto magnam expedita eos iste quia, et in sit,
              explicabo natus a nobis vitae tenetur.
            </h2>
            <div>
              <p className='text-base py-1 flex'>
                {/* <span className='mr-2'>Rating:</span> */}
                <ReactStars
                  count={5}
                  size={24}
                  value={4.5}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className='far fa-star'></i>}
                  halfIcon={<i className='fa fa-star-half-alt'></i>}
                  fullIcon={<i className='fa fa-star'></i>}
                  activeColor='#ffd700'
                />
                <span className='ml-1'>4.5 (106)</span>
              </p>
            </div>
            <Link
              to={`/product/`}
              className='explore_btn mt-3 text-black font-semibold py-1 rounded'
            >
              <button className='productbtn mx-auto'>
                <span aria-hidden='true' className='circle'>
                  <span className='icon arrow'></span>
                </span>
                <span className='productbtn-text'>Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default SingleProduct
