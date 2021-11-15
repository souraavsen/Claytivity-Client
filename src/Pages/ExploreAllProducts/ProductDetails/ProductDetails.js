import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import NavbarSection from "../../../Shared/Navbar/NavbarSection";

import OrderForm from "./OrderForm";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [allBookings, setAllBookings] = useState([]);

  const productId = useParams();
  const history = useHistory();
  const { admin } = useAuth();

  useEffect(() => {
    fetch(
      `https://boiling-badlands-82832.herokuapp.com/product-details/${productId.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavbarSection></NavbarSection>
      <div className='pt-12 pb-24'>
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
          <>
            <div className='container lg:flex md:flex justify-between px-8 py-12 bg-white rounded-tl-lg rounded-tr-lg rounded-br-lg'>
              <img
                className='rounded-md shadow-md md:w-4/12 mx-auto p-2'
                src={
                  productDetails.img
                    ? productDetails.img
                    : "https://i.ibb.co/3zq9hJx/bl11-1024x1024.jpg"
                }
                alt=''
              />
              <div className='w-11/12 md:w-5/12 mx-auto flex flex-col items-start md:ml-20'>
                <h1 className='text-4xl font-bold text-center pb-12 font_architect'>
                  {productDetails.product_name}
                </h1>
                <h4 className='text-justify text-lg py-6'>
                  {productDetails.description}
                </h4>
                <h4>
                  <span className='font-semibold'>Price:</span>{" "}
                  <span className='text-lg text-yellow-900 font-semibold'>
                    {productDetails.price}$
                  </span>{" "}
                  only
                </h4>

                <div className='flex items-center'>
                  <ReactStars
                    classNames='mr-2 '
                    count={5}
                    size={24}
                    value={productDetails.rating}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className='far fa-star'></i>}
                    halfIcon={<i className='fa fa-star-half-alt'></i>}
                    fullIcon={<i className='fa fa-star'></i>}
                    activeColor='#ffd700'
                  />
                  <p>
                    {productDetails.rating}({productDetails.rating})
                  </p>
                </div>
                <img
                  className='w-16 p-2 bg-yellow-700 bg-opacity-30 cursor-pointer mt-10 border shadow-md'
                  src={productDetails.img}
                  alt=''
                />

                {!admin && (
                  <div className='mx-auto'>
                    <button
                      className='px-4 py-2  font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 mt-4 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                      onClick={() => setModalShow(true)}
                    >
                      Purchase
                    </button>
                    <OrderForm
                      show={modalShow}
                      productDetails={productDetails}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
