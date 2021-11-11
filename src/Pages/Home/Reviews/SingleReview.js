import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Review.css";

const SingleReview = () => {
  return (
    <div className='review_background md:min-h-72 '>
      <div className='py-16 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-sm'>
        <div className='container md:flex justify-evelny items-center'>
          <div className='md:w-1/4'>
            <img
              className='w-48 h-48 rounded-full mx-auto'
              src='https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls='
              alt=''
            />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <div className='py-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='28px'
                height='24.834px'
                viewBox='0 0 28 24.834'
                enable-background='new 0 0 28 24.834'
              >
                <g>
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='28px'
                    height='24.834px'
                    fill='#ffffff'
                    d='M10.336,2.618c1.2,1.6,1.8,3.867,1.8,6.8c0,2.8-0.617,5.384-1.85,7.75c-1.234,2.367-3.084,4.75-5.55,7.15 c-0.067,0.066-0.167,0.1-0.3,0.1c-0.2,0-0.367-0.1-0.5-0.299c-0.135-0.201-0.135-0.367,0-0.5c3.266-3.334,4.9-7.266,4.9-11.801 c0-1.866-0.334-3.233-1-4.1c-0.6,1-1.7,1.5-3.3,1.5c-1.334,0-2.384-0.416-3.15-1.25c-0.767-0.833-1.15-1.916-1.15-3.25 c0-1.466,0.45-2.583,1.35-3.35c0.9-0.766,2.183-1.15,3.85-1.15C7.502,0.218,9.136,1.018,10.336,2.618z M25.936,2.618 c1.201,1.6,1.801,3.867,1.801,6.8c0,2.8-0.617,5.384-1.85,7.75c-1.234,2.367-3.086,4.75-5.551,7.15c-0.067,0.066-0.167,0.1-0.3,0.1 c-0.2,0-0.367-0.1-0.5-0.299c-0.135-0.201-0.135-0.367,0-0.5c3.265-3.334,4.899-7.266,4.899-11.801c0-1.866-0.334-3.233-1-4.1 c-0.6,1-1.699,1.5-3.3,1.5c-1.334,0-2.385-0.416-3.15-1.25c-0.767-0.833-1.149-1.916-1.149-3.25c0-1.466,0.45-2.583,1.351-3.35 c0.899-0.766,2.182-1.15,3.85-1.15C23.102,0.218,24.737,1.018,25.936,2.618z'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='text-white text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sequi voluptatibus veritatis quibusdam quam molestias, atque,
              asperiores doloribus iste cum dolore facere quae harum molestiae
              dolorum earum dolores, aperiam quisquam est debitis! Error
              repudiandae rerum numquam aut laboriosam.
            </div>
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
            <div className='pt-4 tect-xl font-semibold text-white italic'>
              ~ Sourav Sen
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleReview;
