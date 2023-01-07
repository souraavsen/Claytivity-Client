import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SingleMyOrder from "./SingleMyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [rerender, setRerender] = useState(false);

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://claytivity-server.onrender.com/all-orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [rerender]);

  const usersOrders = orders.filter((order) => order.email === user.email);

  const deleteSingleOrder = (id) => {
    const permission = window.confirm("Are you sure want to cancel ?");
    if (permission) {
      fetch(`https://claytivity-server.onrender.com/remove-order/${id}`, {
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
          {usersOrders.length == 0 && (
            <div className='container h-screen flex justify-center items-center'>
              <div className='-ml-4 flex flex-col justify-center items-center bg-white rounded'>
                <img
                  className='mx-auto'
                  src='https://i.ibb.co/F7xwCtg/678caef6068a976e4a0d94bbdba6b660.png'
                  alt=''
                />
                <h1 className='text-lg md:text-2xl pb-4'>
                  No orders Yet. Explore Now
                </h1>
              </div>
            </div>
          )}
          <div className='md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center items-center'>
            {usersOrders.map((order) => (
              <SingleMyOrder
                key={order._id}
                order={order}
                deleteSingleOrder={deleteSingleOrder}
              ></SingleMyOrder>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
