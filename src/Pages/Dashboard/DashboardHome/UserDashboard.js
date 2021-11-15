import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const usersOrders = orders.filter((order) => order.email === user.email);
  const shippedOrders = usersOrders.filter(
    (order) => order.status === "Shipped"
  );
  const pendingOrders = usersOrders.filter(
    (order) => order.status === "Pending"
  );

  let totalCost = 0;
  {
    usersOrders.map(
      (order) => (totalCost = totalCost + parseFloat(order.total_cost))
    );
  }

  return (
    <div className='py-16'>
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
          <div className='container grid grid-cols-1 md:grid-cols-3 gap-6 text-xl'>
            <div className='w-full p-12 text-center bg-white shadow-md rounded-tl-lg rounded-tr-lg rounded-br-lg'>
              <h1>
                <span className='font-bold'>Total Spent:</span> ${totalCost}
              </h1>
            </div>
            <div className='w-full p-12 text-center bg-white shadow-md rounded-tl-lg rounded-tr-lg rounded-br-lg'>
              <h1>
                <span className='font-bold'>Total Order:</span>{" "}
                {usersOrders.length}
              </h1>
            </div>
            <div className='w-full p-12 text-center bg-white shadow-md rounded-tl-lg rounded-tr-lg rounded-br-lg'>
              <h1>
                <span className='font-bold'>Total Shipped:</span>{" "}
                {shippedOrders.length}
              </h1>
            </div>
          </div>
          <div></div>
          <div>
            <h1 className='pt-16 m-auto text-2xl font-semibold'>
              Recently Shipped
            </h1>
            <div>
              <div className='hidden md:flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-full mx-auto px-10 py-1 rounded-bl-lg rounded-br-lg shadow-md mt-6 -mb-6 bg-green-500 bg-opacity-20'>
                <div className='w-8/12 md:w-full flex flex-col md:flex-row flex-wrap justify-between items-center'>
                  <h1 className='font-semibold text-center text-black'>
                    Image
                  </h1>
                  <h1 className='font-semibold text-center text-black'>
                    Product Name X Quantity
                  </h1>
                  <h2 className='font-semibold text-center truncate'>
                    Transection ID
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Order Date
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Total Cost
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Order Status
                  </h2>
                </div>
              </div>
            </div>
            {!shippedOrders.length && (
              <div>
                <h1 className='font-semibold text-center text-black py-16 bg-white shadow-md rounded-md mt-12'>
                  Nothing To Ship
                </h1>
              </div>
            )}
            {shippedOrders.map((order) => (
              <div key={order._id}>
                <div className='flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-full mx-auto px-10 py-4 rounded-md shadow-md my-10 bg-green-500 bg-opacity-20'>
                  <div className='md:w-full flex flex-col md:flex-row flex-wrap justify-between items-center'>
                    <img className='w-10 h-10' src={order.product_img} alt='' />
                    <Link
                      to={`/product-details/${order.product_id}`}
                      title='Click to view product'
                      className=' font-semibold text-center text-yellow-700 text-opacity-80 hover:text-yellow-700 hover:text-opacity-70'
                    >
                      {order.product_name} X {order.quantity}
                    </Link>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.transiction}
                    </h2>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.date}
                    </h2>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.total_cost}
                    </h2>
                  </div>
                  <div className='md:ml-24 flex justify-center items-center'>
                    <div>
                      {order.status === "Pending" ? (
                        <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-red-600 bg-opacity-60'>
                          {order.status}
                        </h2>
                      ) : (
                        <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-green-600 bg-opacity-60'>
                          {order.status}
                        </h2>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className='pt-2 m-auto text-2xl font-semibold'>More To ship</h1>
            <div>
              <div className='hidden md:flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-full mx-auto px-10 py-1 rounded-bl-lg rounded-br-lg shadow-md mt-6 -mb-6 bg-yellow-500 bg-opacity-20'>
                <div className='w-8/12 md:w-full flex flex-col md:flex-row flex-wrap justify-between items-center'>
                  <div className=' font-semibold text-center text-black'>
                    Image
                  </div>
                  <div className='font-semibold text-center text-black'>
                    Product Name X Quantity
                  </div>
                  <h2 className='font-semibold text-center truncate'>
                    Transection ID
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Order Date
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Total Cost
                  </h2>
                  <h2 className='font-semibold text-center truncate'>
                    Order Status
                  </h2>
                </div>
              </div>
            </div>
            {!pendingOrders.length && (
              <div>
                <h1 className='font-semibold text-center text-black py-16 bg-white shadow-md rounded-md mt-12'>
                  No orders yet. Order Now <br />
                  <Link
                    to='/all-products'
                    className='text-yellow-700 text-opacity-80 hover:text-yellow-700 hover:text-opacity-70 text-xl font-bold'
                  >
                    Explore Products
                  </Link>
                </h1>
              </div>
            )}
            {pendingOrders.map((order) => (
              <div key={order._id}>
                <div className='flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-full mx-auto px-10 py-4 rounded-md shadow-md my-10 bg-yellow-500 bg-opacity-20'>
                  <div className='md:w-full flex flex-col md:flex-row flex-wrap justify-between items-center'>
                    <img className='w-10 h-10' src={order.product_img} alt='' />
                    <Link
                      to={`/product-details/${order.product_id}`}
                      title='Click to view product'
                      className=' font-semibold text-center text-yellow-700 text-opacity-80 hover:text-yellow-700 hover:text-opacity-70'
                    >
                      {order.product_name} X {order.quantity}
                    </Link>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.transiction}
                    </h2>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.date}
                    </h2>
                    <h2 className=' font-semibold text-center truncate'>
                      {order.total_cost}
                    </h2>
                  </div>
                  <div className='md:ml-24 flex justify-center items-center'>
                    <div>
                      {order.status === "Pending" ? (
                        <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-red-600 bg-opacity-60'>
                          {order.status}
                        </h2>
                      ) : (
                        <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-green-600 bg-opacity-60'>
                          {order.status}
                        </h2>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
