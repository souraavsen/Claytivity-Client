import { React, useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import NavbarSection from "../../Shared/Navbar/NavbarSection";

const ExploreAllProducts = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://claytivity-server.onrender.com/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <NavbarSection></NavbarSection>
      <div className='py-16'>
        <h1 className='text-center text-4xl font-semibold pb-12'>
          Explore All Products
        </h1>
        {loading ? (
          <div className='w-screen h-screen flex justify-center items-center -mt-20'>
            <div className='sk-folding-cube'>
              <div className='sk-cube1 sk-cube'></div>
              <div className='sk-cube2 sk-cube'></div>
              <div className='sk-cube4 sk-cube'></div>
              <div className='sk-cube3 sk-cube'></div>
            </div>
          </div>
        ) : (
          <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {allproducts.map((product) => (
              <SingleProduct
                key={product._id}
                product={product}
              ></SingleProduct>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreAllProducts;
