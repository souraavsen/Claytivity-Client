import React from "react";

const SingleOrder = ({ order, deleteSingleOrder, handelUpdatesStatus }) => {
  return (
    <div className='container mx-auto md:mt-8'>
      <div className='md:min-h-full md:mt-8 px-2 pb-4 bg-white border-2 md:flex justify-between items-center shadow-md rounded-bl-xl rounded-br-xl'>
        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='card h-48 w-56 shadow-md ml-2 -mt-16 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-dark text-white'>
            <img
              className='card-img h-48 w-56'
              src={order.product_img}
              alt='Card image'
            />
            <div className='card-img-overlay bg-gray-900 bg-opacity-70'>
              <h5 className='card-title'>{order.product_name}</h5>
              <p className='card-text text-xs'>Order ID: {order._id}</p>
              <p className='card-text'>Date: {order.date}</p>
              <p className='card-text'>Total Cost: {order.total_cost}</p>
            </div>
          </div>
          <h2 className='px-2 font-semibold my-6'>
            Status:{" "}
            {order.status === "Pending" ? (
              <span className='px-3 py-0.5 bg-red-400 text-white rounded-full'>
                {order.status}
              </span>
            ) : (
              <span className='px-3 py-0.5 bg-green-400 text-white rounded-full'>
                {order.status}
              </span>
            )}
          </h2>
          <h2 className='px-2 font-semibold'>
            Quantity:{" "}
            <span className='px-2 py-1 bg-yellow-700 bg-opacity-70 text-white rounded-full'>
              {order.quantity}
            </span>
          </h2>
        </div>

        <div className='w-72 px-3 mx-auto mt-3 flex flex-col'>
          <h2 className='text-center font-extrabold text-lg italic'>-By</h2>
          <h2 className='text-center font-semibold text-md'>
            {order.username}
          </h2>
          <h2 className='px-2 py-2 text-base'>
            <span className='text-left font-semibold'>Contact: </span>
            {order.contact}
          </h2>
          <h2 className='px-2 pb-2 font-semibold'>
            Transiction_ID: {order.transiction}
          </h2>
          <h2 className='px-2 pb-2 font-semibold'>Address: {order.address}</h2>

          <div className='mx-auto pt-2 flex justify-center items-center'>
            {order.status === "Pending" && (
              <button
                className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-green-500 text-white'
                onClick={() => handelUpdatesStatus(order._id)}
              >
                <i className='far fa-check-circle'></i>
              </button>
            )}
            <button
              className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 bg-red-500 text-white'
              onClick={() => deleteSingleOrder(order._id)}
            >
              <i className='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
