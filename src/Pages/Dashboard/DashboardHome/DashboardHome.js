import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import dashboardimg from "../../../Images/dashboard.jpg";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const DashboardHome = () => {
  const { user, admin } = useAuth();

  // const [orders, setOrders] = useState([]);
  // const [rerender, setRerender] = useState(false);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:5000/all-orders`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //       setLoading(false);
  //     });
  // }, [rerender]);

  // const usersOrders = orders.filter((order) => order.email === user.email);
  // const shippedOrders = usersOrders.filter(
  //   (order) => order.status === "Shipped"
  // );
  // const pendingOrders = usersOrders.filter(
  //   (order) => order.status === "Pending"
  // );

  return (
    <div className='py-16'>
      {/* className='xl:my-20' */}
      <h1 className='text-center py-4 m-auto text-2xl font-semibold'>
        Hi {user.displayName}, Welcome to Dashboard
      </h1>
      {admin ? (<AdminDashboard></AdminDashboard>) : (
        <UserDashboard></UserDashboard>
      )}
    </div>
  );
};

export default DashboardHome;
