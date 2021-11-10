import React from 'react'
import Slider from './Slider/Slider'
import HomeProducts from "./HomeProducts/HomeProducts";
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <HomeProducts></HomeProducts>
        <Reviews></Reviews>
      </div>
    );
}

export default Home
