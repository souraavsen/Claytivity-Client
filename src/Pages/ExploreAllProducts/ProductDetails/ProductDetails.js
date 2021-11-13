import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import NavbarSection from "../../../Shared/Navbar/NavbarSection";
import axios from "axios";
import { Card } from "react-bootstrap";
import OrderForm from "./OrderForm";

const ProductDetails = () => {
  const [planDetails, setPlanDetails] = useState({});
  //   const [joinflag, setJoinflag] = useState(false);
  const [joinusers, setJoinusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [allBookings, setAllBookings] = useState([]);

  const productId = useParams();
  console.log(productId.productId);
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/product-details/${productId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanDetails(data);
      });
  }, []);

  useEffect(() => {
    // fetch(
    //   `https://bloodcurdling-warlock-64846.herokuapp.com/booking-details/${planId.id}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJoinusers(data);
    //   });
  }, []);

  useEffect(() => {
    fetch(`https://bloodcurdling-warlock-64846.herokuapp.com/all-bookings`)
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
        setLoading(false);
      });
  }, []);

  const ifUserBooked = allBookings.filter((info) => info.email === user.email);
  console.log(ifUserBooked);
  let ifPlan = ifUserBooked.filter(
    (plan) => plan.package_id === planDetails._id
  );

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
            <div className='container lg:flex md:flex justify-between px-8 py-12 bg-white'>
              <img
                className='rounded-md shadow-md md:w-4/12 mx-auto p-2'
                src={
                  planDetails.img
                    ? planDetails.img
                    : "https://i.ibb.co/3zq9hJx/bl11-1024x1024.jpg"
                }
                alt=''
              />
              <div className='w-11/12 md:w-5/12 mx-auto flex flex-col items-center md:ml-20'>
                <h1 className='text-4xl font-bold text-center pb-12 font_architect'>
                  {planDetails.product_name}
                </h1>
                <h4 className='text-justify py-6'>{planDetails.description}</h4>
                <div className='flex items-center pb-4'>
                  <h4 className='pr-8 border-r-2 border-gray-400'>
                    {planDetails.date}
                  </h4>
                </div>
                <h4>
                  Price:{" "}
                  <span className='text-lg text-yellow-900 font-semibold'>
                    {planDetails.price}$
                  </span>{" "}
                  only
                </h4>
                <div className='flex justify-center items-center'>
                  <button
                    className='px-4 py-2 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 mt-4 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                    //   onClick={() => setJoinflag(!joinflag)}
                    onClick={() => setModalShow(true)}
                  >
                    Purchase
                  </button>
                  <OrderForm
                    show={modalShow}
                    planDetails={planDetails}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
