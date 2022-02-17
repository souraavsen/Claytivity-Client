import React from "react";
import "./Footer.css";
import logo from "../../assets/Images/caltivity-logo.png";

const Footer = () => {
  return (
    <div>
      <div className='md:my-auto h-20 w-20 rounded-full bg-gray-800 flex justify-center items-center z-30 brand_logo'>
        <img
          className='mx-auto w-16 m-auto'
          src='https://i.ibb.co/YbS1s3D/tier-animation-transparent.gif'
          alt=''
        />
      </div>

      <div className='footer_background footer_container'>
        <div className='bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm pt-2 flex flex-col justify-center items-center'>
          <div className='container md:flex justify-around align-center pt-3'>
            <div className='px-3 px-lg-0'>
              <div>
                <p className='mochiy text-white text-3xl font-medium text-center font_architect mt-4'>
                  Clativity
                </p>
              </div>
              <div className='mt-4 flex flex-col justify-center items-center md:items-start'>
                <p className='text-white pt-2 '>
                  <i className='fas fa-map-marker-alt mr-3 text-white'></i>
                  Mirpur Road, Dhaka.
                </p>
                <p className='text-white pt-2 '>
                  <i className='fas fa-paper-plane mr-3 text-white'></i>
                  clativity@gmail.com
                </p>
                <p className='text-white pt-2 '>
                  <i className='fas fa-phone-alt mr-3 text-white'></i>
                  01761023894
                </p>
              </div>
            </div>
            <div className='mt-5 flex flex-col justify-center items-center'>
              <div className='text-white text-center text-lg font-light'>
                “A field of clay touched by the genius of man becomes a castle.”
              </div>
              <div className='flex flex-col justify-center items-center md:items-start text-lg mt-2'>
                <div className='flex items-center justify-center py-2'>
                  <i className='fab fa-facebook text-gray-50 text-opacity-90 hover:text-opacity-80 text-3xl cursor-pointer'></i>
                  <i className='fab fa-twitter text-gray-50 text-opacity-90 hover:text-opacity-80 text-3xl px-6 cursor-pointer'></i>
                  <i className='fab fa-linkedin text-gray-50 text-opacity-90 hover:text-opacity-80 text-3xl cursor-pointer'></i>
                </div>
              </div>
            </div>

            <div className='px-3 px-lg-0 mt-16 mt-lg-0 ms-lg-5'>
              <div className='mt-5 flex flex-col justify-center items-center'>
                <p className='text-white text-opacity-90 font-semibold'>
                  Terms and Conditions
                </p>
                <p className='text-white text-opacity-90 font-semibold'>
                  Contact Us
                </p>
              </div>
              <div className='mt-2 flex flex-col justify-center items-center'>
                <img
                  src='https://i.ibb.co/G2fDPjw/Google-Play-Badge.png'
                  alt=''
                />
                <img
                  className='mt-1'
                  src='https://i.ibb.co/92hb6Q9/App-Store-Badge.png'
                  alt=''
                />
              </div>
            </div>
          </div>

          <p className='text-yellow-300 text-opacity-80  font-extralight text-center pb-4'>
            © 2021 clativity. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
