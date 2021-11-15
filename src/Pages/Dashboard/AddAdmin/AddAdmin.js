import { Alert } from "@mui/material";
import React, { useState } from "react";
import adminimg from "../../../Images/addAdmin.gif";
import axios from "axios";

const AddAdmin = () => {
  const [successf, setSuccessf] = useState(false);
  const [errorf, setErrorf] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const permission = window.confirm(`Are you sure ? Add ${email} as Admin ?`);
    if (permission) {
      axios
        .put("https://boiling-badlands-82832.herokuapp.com/users/admin", {
          email: email,
        })
        .then((res) => {
          e.target.reset();
          setSuccessf(true);
        })
        .catch((error) => {
          setErrorf(true);
        });
    }
  };

  setTimeout(() => {
    if (successf || errorf) {
      setSuccessf(false);
      setErrorf(false);
    }
  }, 3000);

  return (
    <div className='pt-24 pb-12'>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Make New Admin
      </h1>

      <div className='container md:flex justify-between items-center bg-white shadow-md mb-8 rounded-tl-lg rounded-br-lg'>
        <div className='md:w-7/12 md:h-full flex justify-start items-center -ml-3 rounded-tl-xl'>
          <img src={adminimg} alt='' />
        </div>
        <div className='md:w-5/12 flex flex-col py-10 mx-4 md:mx-0 lg:mx-0'>
          <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
            <h4 className='text-2xl font-bold'>Add Admin</h4>
          </div>

          <form
            className='mb-8'
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className='-mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide text-black text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  Enter Email Address
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='email'
                  required
                  placeholder='email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='mx-auto flex justify-center'>
              <button
                className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                type='submit'
              >
                <i className='fas fa-user-plus  text-xl'></i>
              </button>
            </div>
          </form>
          {successf && (
            <Alert
              className='w-9/12 mx-auto'
              severity='success'
              onClose={() => {
                setSuccessf(false);
              }}
            >
              {email} added as an Admin
            </Alert>
          )}
          {errorf && (
            <Alert
              className='w-9/12 mx-auto'
              severity='error'
              onClose={() => {
                setErrorf(false);
              }}
            >
              Something Went Wrong
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
