import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";
import axios from "axios";

const ManageOrders = () => {
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
    const permission = window.confirm("Are you sure want to remove ?");
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

  const data = { status: "Shipped" };

  const handelUpdatesStatus = (id) => {
    const permission = window.confirm(
      "Are you sure ? Is the item shipped already ?"
    );
    if (permission) {
      axios
        .put(
          `http://127.0.0.1:5000/order/update/${id}`,
          data
        )
        .then((res) => {
          console.log(res);
          setRerender(!rerender);
        });
    }
  };

  return (
    <div className='lg:py-16'>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Manage All Orders
      </h1>
      {loading ? (
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      ) : (
        <div className='w-full md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
          {orders.map((order) => (
            <SingleOrder
              key={order._id}
              order={order}
              deleteSingleOrder={deleteSingleOrder}
              handelUpdatesStatus={handelUpdatesStatus}
            ></SingleOrder>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
