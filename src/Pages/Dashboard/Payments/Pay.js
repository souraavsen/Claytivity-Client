import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../../Hooks/useAuth";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const Pay = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);
  
  const orderId = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/order-details/${orderId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderDetails(data);
      });
  }, []);

  const stripePromise = loadStripe(
    "pk_test_51KQSEeEBncahRrOOOpZdrPPg1lFNREJ8Vi2BfH88ImWae83hK7wuCPtwDlmJKCpbuA1j9HWUhj2ENiEJQeEPUtRm00IUC1WCuo"
  );

  return (
    <div className='w-8/12 min-h-screen mt-24 p-12 2xl:-mt-36 2xl:-mb-60 bg-white text-center shadow-md rounded-tl-lg rounded-tr-lg rounded-br-lg'>
      <div>
        <h1 className='text-4xl font-semibold pb-12'>Payment Systems</h1>
        <div>
          
        </div>
        {orderDetails?.total_cost &&<Elements stripe={stripePromise}>
          <Checkout orderDetails={orderDetails}/>
        </Elements>}
        <img
          className='w-1/2 pb-4 mx-auto'
          src='https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Pay;
