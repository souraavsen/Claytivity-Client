import React, { useEffect, useState } from "react";
import SingleMyOrder from './SingleMyOrder';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [rerender, setRerender] = useState(false);

  const [loading, setLoading] = useState(true);


   useEffect(() => {
     fetch(`http://127.0.0.1:5000/all-orders`)
       .then((res) => res.json())
       .then((data) => {
         setOrders(data);
         setLoading(false);
       });
   }, [rerender]);
  
  const deleteSingleOrder = (id) => {
    const permission = window.confirm("Are you sure want to cancel ?");
    if (permission) {
      fetch(`http://127.0.0.1:5000/remove-order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setRerender(!rerender);
        });
    }
  };
  
  return (
    <div className='pt-24 pb-12'>
      <h1 className='text-center text-4xl font-semibold pb-12'>My Orders</h1>
      <div className=' md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
        {orders.map((order) => (
          <SingleMyOrder
            key={order._id}
            order={order}
            deleteSingleOrder={deleteSingleOrder}
          ></SingleMyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
