import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import NavbarSection from '../../Shared/Navbar/NavbarSection'

const Signup = () => {
  const [orgPassword, setOrgPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(true);

  const {
    googleSignin,
    setEmail,
    setPassword,
    SingUpWithEmail,
    error,
    setFirstName,
    setLastName,
    setError,
  } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setPasswordMatched(true);
  };

  const handlePasswordChange = (e) => {
    setOrgPassword(e.target.value);
    setPassword(e.target.value);
    setError("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (orgPassword === confirmPassword) {
      SingUpWithEmail(e);
      setPasswordMatched(true);
    } else {
      setPasswordMatched(false);
    }
  };

  return (
    <>
      <NavbarSection></NavbarSection>
      <div className='container md:flex justify-between items-center bg-yellow-700 bg-opacity-50 my-8 px-4 rounded-tl-lg rounded-br-lg'>
        <div className='md:w-5/12 flex flex-col py-10 mx-4 md:mx-0 lg:mx-0'>
          <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
            <h4 className='text-2xl font-bold'>SIGN UP</h4>
          </div>

          <p className='text-center font-semibold'>
            Already have an account?{" "}
            <span>
              <Link className='text-white hover:text-gray-200' to={"/signin"}>
                Sign in
              </Link>
            </span>
          </p>
          <form
            className='w-full max-w-lg mx-auto px-4'
            onSubmit={(e) => {
              handleForm(e);
            }}
          >
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-first-name'
                >
                  First Name
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  type='text'
                  placeholder='first name'
                  onChange={handleFirstName}
                />
              </div>
              <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  Last Name
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='text'
                  placeholder='last name'
                  onChange={handleLastName}
                />
              </div>
            </div>
            <div className='-mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  E-mail
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='email'
                  required
                  placeholder='email@ email.com'
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Password
                </label>

                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='password'
                  required
                  placeholder='password'
                  onChange={handlePasswordChange}
                />
                <p className='text-xs italic  text-red-700 text-center'>
                  {error}
                </p>
              </div>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Confirm Password
                </label>

                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='password'
                  required
                  placeholder='confirm password'
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordMatched(true);
                  }}
                />
                {!passwordMatched && (
                  <p className='text-xs italic  text-red-700 text-center'>
                    Password is not matched.
                  </p>
                )}
              </div>
              <button
                className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-white hover:bg-gray-900 mt-4 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                type='submit'
              >
                Create Account
              </button>
            </div>
          </form>

          <hr className='text-black font-extrabold' />

          <button
            className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-white hover:bg-gray-900 mt-4 rounded-tl-lg rounded-tr-lg rounded-br-lg'
            onClick={googleSignin}
          >
            <i className='fab fa-google text-yellow-600'></i>{" "}
            <span className='text-black font-semibold mx-auto text-xl'>
              Countinue
            </span>
          </button>
        </div>
        <div className='md:w-7/12 md:h-full flex justify-center items-center'>
          <img src='https://i.ibb.co/NZPMsQf/Urn1-small-unscreen.gif' alt='' />
        </div>
      </div>
    </>
  );
};

export default Signup;
