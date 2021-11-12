import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import reviewimg from '../../../Images/review.gif'

const AddReview = () => {
  const { user } = useAuth();

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
                // onSubmit={(e) => {
                //   signInWithEmail(e);
                // }}
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
                      readOnly
                      value={user?.email}
                      // onChange={handleEmail}
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
                      placeholder='Add message'>
                      Value
                      </textarea>
                  </div>
                </div>

                <div className='-mx-3 mb-6'>
                  <div className='w-11/12 lg:w-full mx-auto px-3'>
                    <label
                      className='block tracking-wide text-black text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Ratting
                    </label>
                    <input
                      className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      placeholder='Add ratting out of 5'
                    />
                  </div>
                </div>
                <div className='mx-auto flex justify-center'>
                  <button
                    className='px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-50 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                    type='submit'
                  >
                    <i class='fas fa-location-arrow'></i>
                  </button>
                </div>
              </form>
            </div>
            <div className='md:w-7/12 md:h-full flex justify-start items-center -mr-3 rounded-tl-xl'>
              <img src={reviewimg} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddReview
