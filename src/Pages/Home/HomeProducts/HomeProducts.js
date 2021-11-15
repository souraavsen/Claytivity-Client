import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const HomeProducts = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://boiling-badlands-82832.herokuapp.com/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className='py-10'>
      <h1 className='text-center text-4xl font-semibold pb-12 mt-10'>
        Products
      </h1>
      {loading ? (
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
            {/* Here selecting first 6 item or all item */}
            {allproducts.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <Link
            className='px-3 py-1 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 md:my-0 text-white bg-yellow-800 bg-opacity-50'
            to='/all-products'
          >
            Explore All
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
