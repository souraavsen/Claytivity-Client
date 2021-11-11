import React from 'react'
import { Link } from 'react-router-dom'
import footerimg from "../../Images/404.gif";

const NotFound = () => {

    // this Component is for the wrong routes
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center w-7/12 pb-16 mx-auto my-10 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-white'>
          <img src={footerimg} className='w-9/12' alt='' />
          <h1 className='text-lg text-black font-semibold'>
            404! Page not found.
          </h1>
          <Link
            to='/'
            className='px-4 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50'
          >
            Go back to Home
          </Link>
        </div>
      </div>
    );
}

export default NotFound
