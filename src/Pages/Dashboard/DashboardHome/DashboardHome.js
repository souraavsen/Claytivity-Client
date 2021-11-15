import React from "react";
import useAuth from "../../../Hooks/useAuth";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const DashboardHome = () => {
  const { user, admin } = useAuth();

  return (
    <div className='py-16'>
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
