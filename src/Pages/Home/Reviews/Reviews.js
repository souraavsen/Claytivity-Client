import React from 'react'
import { Carousel } from "react-bootstrap";
import SingleReview from './SingleReview'

const Reviews = () => {
    return (
      <div className='py-16'>
        <h1 className='text-center text-3xl md:text-4xl font-semibold pb-16'>
          Our Happy Customers
        </h1>
        <Carousel>
          <Carousel.Item>
            <SingleReview></SingleReview>
          </Carousel.Item>
          <Carousel.Item>
            <SingleReview></SingleReview>
          </Carousel.Item>
          <Carousel.Item>
            <SingleReview></SingleReview>
          </Carousel.Item>
          <Carousel.Item>
            <SingleReview></SingleReview>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Reviews
