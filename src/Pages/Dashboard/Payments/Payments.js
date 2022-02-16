import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Payments = () => {
  const [orders, setOrders] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://boiling-badlands-82832.herokuapp.com/all-orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [rerender]);


  return (
    <div className='w-8/12 min-h-screen mt-24 p-12 2xl:-mt-36 2xl:-mb-60 bg-white text-center shadow-md rounded-tl-lg rounded-tr-lg rounded-br-lg'>
      <div>
        <h1 className='text-4xl font-semibold pb-12'>Payment Systems</h1>
        <div>
          {/* <div className='text-sm font-normal mb-12'>
            {orders.map((order) => (
              <li className='flex justify-between items-center my-2'>
                <p>{order._id} - </p>
                <p>{order.date} - </p>
                <p>${order.total_cost}</p>
              </li>
            ))}
          </div> */}
        </div>
        
        <img
          className='pt-4 mx-auto'
          src='https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Payments;
