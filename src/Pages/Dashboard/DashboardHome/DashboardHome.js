import React from "react";
import useAuth from "../../../Hooks/useAuth";
import dashboardimg from "../../../Images/dashboard.jpg";

const DashboardHome = () => {
  const {admin} = useAuth()
  return (
    <div className='py-16'>
      {/* className='xl:my-20' */}
      <h1 className='h-screen text-center py-4 m-auto text-xl font-semibold'>
        Welcome to Dashboard
      </h1>

      {admin && <img className='w-screen' src={dashboardimg} alt='' />}
    </div>
  );
};

export default DashboardHome;
