import React, { useEffect, useState } from 'react'
import { Carousel } from "react-bootstrap";
import SingleReview from './SingleReview'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [rerender, setRerender] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://127.0.0.1:5000/all-reviews`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        });
    }, [rerender]);
    return (
      <div className='py-16'>
        <h1 className='text-center text-3xl md:text-4xl font-semibold pb-16'>
          Our Happy Customers
        </h1>
        {loading ? (
          <div className='sk-folding-cube'>
            <div className='sk-cube1 sk-cube'></div>
            <div className='sk-cube2 sk-cube'></div>
            <div className='sk-cube4 sk-cube'></div>
            <div className='sk-cube3 sk-cube'></div>
          </div>
        ) : (
          <Carousel>
            {reviews.map((review) => (
              <Carousel.Item>
                <SingleReview review={review}></SingleReview>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    );
}

export default Reviews
