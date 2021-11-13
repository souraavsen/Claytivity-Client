import React from "react";

const SingleMyOrder = ({ order, deleteSingleOrder }) => {
  return (
    <div>
      <div className='lg:flex justify-center rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-md'>
        <div
          className='order_card md:w-full md:h-full h-48 lg:h-auto lg:w-48 flex-none text-center overflow-hidden'
          style={{
            backgroundImage: `url(${order.product_img})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className='border-2 md:w-full md:h-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-2'>
            <div className='flex justify-between items-center'>
              <p className='text-gray-600'>{order.date}</p>

              <p className='w-10 h-10 text-center mb-2 px-1.5 py-1.5 bg-yellow-700 bg-opacity-70 text-white rounded-full'>
                {order.quantity}
              </p>
            </div>
            <p className='text-gray-700 overflow-hidden'>{order._id}</p>
            <div className='text-gray-900 font-bold text-xl mb-2'>
              {order.product_name}
            </div>
            <p className='text-gray-700 '>TransictionID:{order.transiction}</p>
            <p className='text-gray-700 '>Contact:{order.contact}</p>
            <h2 className='font-semibold my-2'>
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
          </div>

          <div className='flex items-center'>
            <div className='mx-auto flex justify-center items-center'>
              {order.status === "Pending" ? (
                <button
                  className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-90 my-2 md:my-0 bg-red-500 text-white'
                  type='submit'
                  onClick={() => deleteSingleOrder(order._id)}
                >
                  <i className='far fa-trash-alt'></i>
                </button>
              ) : (
                <div
                  className='px-4 mr-2 font-semibold text-lg py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg my-2 md:my-0 text-green-800'
                  >
                  Thanks for really on us
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMyOrder;
