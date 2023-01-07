import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import reviewimg from "../../../assets/Images/review.gif";
import ReactStars from "react-stars";
import axios from "axios";
import userlogo from "../../../assets/Images/userlogo.png";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";

const AddReview = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [rating, setRating] = useState();
  const [successf, setSuccessf] = useState(false);
  const [errorf, setErrorf] = useState(false);

  const initial = {
    username: user.displayName,
    useremail: user.email,
    avatar: user.photoURL ? user.photoURL : userlogo,
    message: "",
  };
  const [reviewdata, setReviewdata] = useState(initial);

  const handleReviewdata = (e) => {
    const data = { ...reviewdata };
    data[e.target.id] = e.target.value;
    setReviewdata(data);
  };

  const data = {
    ...reviewdata,
    ratting: rating,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const permission = window.confirm("Review added successfully.");
    if (permission) {
      axios
        .post("https://claytivity-server.onrender.com/add-review", data)
        .then((res) => {
          setReviewdata(initial);
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

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='pt-24'>
      <h1 className='text-center text-4xl font-semibold pb-12'>Add Review</h1>
      <div>
        <div className='container md:flex justify-between items-center bg-white shadow-md mb-8 rounded-tl-lg rounded-br-lg'>
          <div className='md:w-5/12 flex flex-col py-10 mx-4 md:mx-0 lg:mx-0'>
            <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
              <h4 className='text-2xl font-bold'>Add Review</h4>
            </div>

            <form
              className='mb-8'
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                hidden
                type='text'
                name='photourl'
                value={user?.photoURL}
              />
              <div className='-mx-3 mb-6'>
                <div className='w-11/12 lg:w-full mx-auto px-3'>
                  <label
                    className='block tracking-wide text-black text-xs font-bold mb-2'
                    for='grid-last-name'
                  >
                    Name
                  </label>
                  <input
                    className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    type='text'
                    id='username'
                    readOnly
                    value={user?.displayName}
                  />
                </div>
              </div>
              <div className='-mx-3 mb-6'>
                <div className='w-11/12 lg:w-full mx-auto px-3'>
                  <label
                    className='block tracking-wide text-black text-xs font-bold mb-2'
                    for='grid-last-name'
                  >
                    Email Address
                  </label>
                  <input
                    className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    type='email'
                    id='useremail'
                    readOnly
                    value={user?.email}
                  />
                </div>
              </div>
              <div className='-mx-3 mb-6'>
                <div className='w-11/12 lg:w-full mx-auto px-3'>
                  <label
                    className='block tracking-wide text-black text-xs font-bold mb-2'
                    for='grid-last-name'
                  >
                    Review Message
                  </label>
                  <textarea
                    className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    type='text'
                    id='message'
                    placeholder='Add message'
                    onChange={handleReviewdata}
                  >
                    {reviewdata.message}
                  </textarea>
                </div>
              </div>
              <div className='-mx-3 mb-6'>
                <div className='w-11/12 lg:w-full mx-auto px-3 flex justify-start items-center'>
                  <label
                    className='block tracking-wide my-auto mr-4 text-black text-sm font-bold mb-2'
                    for='grid-last-name'
                  >
                    Ratting:
                  </label>

                  <ReactStars
                    classNames='my-auto ml-2'
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className='far fa-star'></i>}
                    halfIcon={<i className='fa fa-star-half-alt'></i>}
                    fullIcon={<i className='fa fa-star'></i>}
                    activeColor='#ffd700'
                  />
                </div>
              </div>

              <div className='mx-auto flex justify-center'>
                <button
                  className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                  type='submit'
                >
                  <i className='fas fa-location-arrow'></i>
                </button>
              </div>
              {successf && (
                <Alert
                  className='mt-4'
                  severity='success'
                  onClose={() => {
                    setSuccessf(false);
                  }}
                >
                  Review added successfully
                </Alert>
              )}
              {errorf && (
                <Alert
                  className='mt-4'
                  severity='error'
                  onClose={() => {
                    setErrorf(false);
                  }}
                >
                  Something Went Wrong
                </Alert>
              )}
            </form>
          </div>
          <div className='md:w-7/12 md:h-full flex justify-start items-center -mr-3 rounded-tl-xl'>
            <img src={reviewimg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
