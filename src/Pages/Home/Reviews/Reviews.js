import React from 'react'
import SingleReview from './SingleReview'

const Reviews = () => {
    return (
      <div className='py-16'>
        <h1 className='text-center text-3xl md:text-4xl font-semibold pb-12'>
          Our Happy Customers
        </h1>
        <SingleReview></SingleReview>
      </div>
    );
}

export default Reviews
