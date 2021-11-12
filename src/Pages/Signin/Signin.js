import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import NavbarSection from "../../Shared/Navbar/NavbarSection";

const Signin = () => {
  const {
    setEmail,
    setPassword,
    signInWithEmail,
    googleSignin,
    error,
    setError,
  } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <>
      <NavbarSection></NavbarSection>
      <div className='container md:flex justify-between items-center bg-yellow-700 bg-opacity-50 mt-8 mb-16 px-4 rounded-tl-lg rounded-br-lg '>
        <div className='md:w-7/12 md:h-full flex justify-center items-center'>
          <img src='https://i.ibb.co/ctbvB8g/gif3-unscreen.gif' alt='' />
        </div>
        <div className='md:w-5/12 flex flex-col py-10 mx-4 md:mx-0 lg:mx-0'>
          <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
            <h4 className='text-2xl font-bold'>SIGN IN</h4>
          </div>
          <p className='text-center font-semibold pb-4'>
            Haven't any account yet?{" "}
            <span>
              <Link className='text-white hover:text-gray-100' to={"/signup"}>
                Sign up
              </Link>
            </span>
          </p>
          <form
            className='mb-8'
            onSubmit={(e) => {
              signInWithEmail(e);
            }}
          >
            <div className='-mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide  text-black text-xs font-bold mb-2'
                  for='grid-last-name'
                >
                  E-mail
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='email'
                  required
                  placeholder='example@example.com'
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-11/12 lg:w-full mx-auto px-3'>
                <label
                  className='block tracking-wide  text-black text-xs font-bold mb-2'
                  for='grid-password'
                >
                  Password
                </label>
                <input
                  className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  type='password'
                  required
                  placeholder='password'
                  onChange={handlePassword}
                />
                {/* {error && (
                <p className='text-xs italic text-center px-4 py-1 bg-red-400 bg-opacity-80 rounded-md text-white absolute mx-auto'>
                  {error}
                </p>
              )} */}
                <p className='text-xs italic text-red-500 text-center'>
                  {error}
                </p>
              </div>
            </div>
            <div className='mx-auto flex justify-center'>
              <button
                className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-white hover:bg-gray-900 mt-4 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                type='submit'
              >
                Sign In
              </button>
            </div>
          </form>

          <hr className='text-black font-extrabold' />
          {/* Google Signin process*/}
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
      </div>
    </>
  );
};

export default Signin;
