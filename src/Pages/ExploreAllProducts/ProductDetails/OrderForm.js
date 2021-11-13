import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const OrderForm = (props) => {
  // const [loading, setLoading] = useState(true);
  // const [allBookings, setAllBookings] = useState([]);

  const date = new Date();

  const history = useHistory();
  const { user } = useAuth();

  // const usernameref = useRef();
  // const useremailref = useRef();
  // const product_nameref = useRef();
  // const productIdref = useRef();

  const initial = {
    username: user.displayName,
    email: user.email,
    product_id: props.planDetails._id,
    product_name: props.planDetails.product_name,
    product_img: props.planDetails.img,
    product_price: props.planDetails.price,
    contact: "",
    transiction: "",
    quantity: "",
    address: "",
    date: date.toLocaleDateString(),
    status: "Pending",
  };
  const [orderdata, setOrderdata] = useState(initial);


  const handleorderdata = (e) => {
    const data = { ...orderdata };
    data[e.target.id] = e.target.value;
    setOrderdata(data);
  };

  const orderItem = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/add-booking", orderdata)
      .then((res) => {
        e.target.reset();
        setOrderdata(initial);
        window.alert("Item Ordered Succefully.");
        history.push("/dashboard/myorders");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   fetch(`https://bloodcurdling-warlock-64846.herokuapp.com/all-bookings`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBookings(data);
  //       setLoading(false);
  //     });
  // }, []);


  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Order Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-8'>
            <div className='container lg:flex flex-col justify-center items-center'>
              <div className='w-5/12 mx-auto mb-6'>
                <Card className='bg-dark text-white'>
                  <Card.Img src={props.planDetails.img} alt='Card image' />
                  <Card.ImgOverlay className='bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center'>
                    <Card.Title className='font-semibold text-sm pb-4'>
                      {props.planDetails.product_name}
                    </Card.Title>
                    <Card.Text>{date.toLocaleDateString()}</Card.Text>
                    <div className='flex justify-between pt-6 items-center'>
                      <Card.Text className='text-white text-opacity-90 text-2xl font-bold'>
                        ${props.planDetails.price}
                      </Card.Text>

                      <img src='' width='15%' alt='' />
                    </div>
                    <img
                      className='w-24 left-3 top-3 absolute'
                      src='https://i.ibb.co/xHxN16t/images-removebg-preview.png'
                      alt=''
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
              <form onSubmit={(e) => orderItem(e)}>
                <div className='flex flex-wrap mt-1'>
                  <div className='w-full flex justify-between md:mx-6'>
                    <div className='w-full px-3 mb-6 md:mb-0'>
                      <label
                        className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-first-name'
                      >
                        Name
                      </label>
                      <input
                        className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        type='text'
                        id='username'
                        value={user.displayName}
                        // ref={usernameref}
                        placeholder='user name'
                        readOnly
                        onChange={(e) => handleorderdata(e)}
                      />
                    </div>

                    <div className='w-full px-3 mb-6 md:mb-0'>
                      <label
                        className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-last-name'
                      >
                        Email
                      </label>
                      <input
                        className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type='text'
                        id='email'
                        value={user.email}
                        // ref={useremailref}
                        placeholder='email'
                        readOnly
                        onChange={(e) => handleorderdata(e)}
                      />
                    </div>
                  </div>

                  <div className='w-full flex justify-between md:mx-6'>
                    <input
                      id='product_id'
                      type='hidden'
                      value={props.planDetails._id}
                      // ref={productIdref}
                    />

                    <div className='w-full px-3 mb-6 pt-3 md:mb-0'>
                      <label
                        className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-last-name'
                      >
                        Item Name
                      </label>
                      <input
                        className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type='text'
                        id='product_name'
                        value={props.planDetails.product_name}
                        readOnly
                        // ref={product_nameref}
                        placeholder='Package Name'
                        onChange={(e) => handleorderdata(e)}
                      />
                    </div>
                    <div className='w-full px-3 mb-6 pt-3 md:mb-0'>
                      <label
                        className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-last-name'
                      >
                        Contact No.
                      </label>
                      <input
                        className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type='text'
                        id='contact'
                        value={orderdata.contact}
                        required
                        placeholder='01XXXXXXXXXXX'
                        onChange={(e) => handleorderdata(e)}
                      />
                    </div>
                  </div>
                  <div className='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                    <label
                      className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Transection No.
                    </label>
                    <input
                      className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='transiction'
                      value={orderdata.transiction}
                      placeholder='XXXXXXXXXXXXXXXXXXXX'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                  <div className='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                    <label
                      className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Quantity
                    </label>
                    <input
                      className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='quantity'
                      value={orderdata.quantity}
                      placeholder='1'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                  <div className='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                    <label
                      className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Address
                    </label>
                    <input
                      className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='address'
                      value={orderdata.address}
                      placeholder='address'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                  <input id='status' type='hidden' value='Painding' />

                  <div className='w-full flex items-center px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                    <input
                      className='block bg-gray-200 text-gray-700 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500'
                      type='checkbox'
                    />
                    <label
                      className='block tracking-wide text-gray-700 text-base font-bold ml-4'
                      for='grid-last-name'
                    >
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                </div>
                <div className='flex flex-wrap mx-auto mb-6'>
                  <button
                    className='px-4 mx-auto mt-4 py-2 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                    type='submit'
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='px-3 py-1 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-80 my-2 md:my-0 text-white bg-red-700 bg-opacity-90'
            onClick={props.onHide}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderForm;
