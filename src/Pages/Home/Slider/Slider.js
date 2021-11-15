import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";


const Slider = () => {
  return (
    <div className='-mt-20'>
      <Carousel fade>
        <Carousel.Item interval={4000}>
          <div className='slide1 lg:w-screen lg:min-h-screen'>
            <div className='slide1-content min-h-screen pl-8 md:pl-20 pr-20 py-20 flex flex-col justify-end bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
              <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                <Typical
                  className='text-yellow-900 text-opacity-80'
                  steps={[
                    "Pottery! a pure art...",
                    3000,
                    "Why Pottery Matters ?",
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </h3>
              <p className='text-black text-justify sm:w-4/12 lg:w-6/12 md:text-lg'>
                As one of the oldest human inventions, pottery has been around
                since before the Neolithic period, with objects dating as far
                back to 29,000 BC.
                <br />
                <br />
                While in the past, the pottery industry has served marginal
                niches, today’s pottery companies are thriving thanks in part to
                a resurgence in consumer demand for unique, handmade goods over
                mass-produced items.
              </p>
              <Link
                to='/all-products'
                className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-tl-xl rounded-tr-xl rounded-br-xl text-white bg-yellow-800 bg-opacity-60 hover:bg-opacity-50 text-center'
              >
                Explore
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='slide2 lg:w-screen lg:min-h-screen'>
            <div className='slide2-content ml-auto min-h-screen pl-8 md:pl-20 pr-20 py-20 flex flex-col justify-end bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
              <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                <Typical
                  className='text-yellow-900 text-opacity-80'
                  steps={[
                    "Making Pottery",
                    3000,
                    "Is a blend of love and art.",
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </h3>
              <p className='text-black text-justify sm:w-4/12 lg:w-6/12 md:text-lg'>
                Pottery has been around since the ancient people roamed the
                earth. As one of the oldest human inventions, the practice of
                pottery has developed alongside civilization. One of the most
                popular pieces dated from this time period is The Venus of Dolni
                Vestonice, discovered in the Czech Republic, a ceramic Venus
                figurine of a nude female.
              </p>
              <Link
                to='/all-products'
                className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-tl-xl rounded-tr-xl rounded-br-xl text-white bg-yellow-800 bg-opacity-60 hover:bg-opacity-50 text-center'
              >
                Explore
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='slide3 lg:w-screen lg:min-h-screen'>
            <div className='slide3-content min-h-screen pl-8 pr-20 py-20 flex flex-col justify-end items-end lg:pr-48 md:pr-48 bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
              <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                <Typical
                  className='text-yellow-900 text-opacity-80'
                  steps={[
                    "Evolution",
                    3000,
                    "Pottery became exciting from several years.",
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </h3>
              <p className='text-black text-justify sm:w-4/12 lg:w-6/12 md:text-lg'>
                Thanks to the intersection of pottery customization, marketing
                and affordability, more and more people are snatching up
                custom-design items, like branded coffee mugs. From corporations
                and nonprofits to museums and monuments, even events; everyone
                wants to take advantage of the many benefits a custom-designed
                mug offers, making it a hot-selling item for pottery companies
                around the world.
              </p>
              <Link
                to='/all-products'
                className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-tl-xl rounded-tr-xl rounded-br-xl text-white bg-yellow-800 bg-opacity-60 hover:bg-opacity-50 text-center'
              >
                Explore
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
