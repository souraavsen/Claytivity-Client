import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const OrderForm = (props) => {
  const date = new Date();

  const history = useHistory();
  const { user } = useAuth();

  const initial = {
    username: user.displayName,
    email: user.email,
    product_id: props.details._id,
    product_name: props.details.product_name,
    product_img: props.details.img,
    product_price: props.details.price,
    // contact: "",
    // transiction: "",
    quantity: "",
    total_cost: "",
    // address: "",
    date: date.toLocaleDateString(),
    status: "Pending",
    paid: false,
  };
  const [orderdata, setOrderdata] = useState(initial);
  const [tiggered, setTiggered] = useState("");

  const handleorderdata = (e) => {
    const data = { ...orderdata };
    data[e.target.id] = e.target.value;
    setOrderdata(data);
  };

  const orderItem = (e) => {
    e.preventDefault();
    orderdata.total_cost =
      props.details.price *
      (orderdata?.quantity ? orderdata.quantity : 0);
    axios
      .post("http://127.0.0.1:5000/add-order", orderdata)
      .then((res) => {
        e.target.reset();
        setOrderdata(initial);
        window.alert("Item Ordered Succefully.");
        console.log(res?.data?.insertedId);
        if (tiggered) {
          history.push(`/dashboard/pay/${res.data.insertedId}`);
        } else {
          history.push("/dashboard/all-products");
        }
      })
      .catch((error) => {});
  };

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
              <div className='md:w-5/12 mx-auto mb-6'>
                <Card className='bg-dark text-white'>
                  <Card.Img src={props.details.img} alt='Card image' />
                  <Card.ImgOverlay className='bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center'>
                    <Card.Text>{date.toLocaleDateString()}</Card.Text>
                    <Card.Title className='font-bold text-lg pb-4'>
                      {props.details.product_name}
                    </Card.Title>
                    <div className=''>
                      <Card.Text className='text-yellow-400 text-2xl font-bold'>
                        ${props.details.price}
                      </Card.Text>
                    </div>
                    <Card.Text className='text-white text-md font-semibold pt-2'>
                      Total: $
                      {props.details.price *
                        (orderdata?.quantity ? orderdata.quantity : 0)}
                    </Card.Text>
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
                      value={props.details._id}
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
                        value={props.details.product_name}
                        readOnly
                        placeholder='Package Name'
                        onChange={(e) => handleorderdata(e)}
                      />
                    </div>
                    {/* <div className='w-full px-3 mb-6 pt-3 md:mb-0'>
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
                    </div> */}
                  </div>
                  {/* <div className='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
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
                      required
                      value={orderdata.transiction}
                      placeholder='XXXXXXXXXXXXXXXXXXXX'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div> */}
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
                      required
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                  {/* <div className='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
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
                      required
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div> */}
                  <input id='status' type='hidden' value='Painding' />

                  <div className='w-full flex items-center px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                    <input
                      className='block bg-gray-200 text-gray-700 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500'
                      type='checkbox'
                      id='conditions'
                    />
                    <label
                      className='block tracking-wide text-gray-700 text-base font-bold ml-4'
                      htmlFor='conditions'
                    >
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                </div>
                <div className='flex flex-wrap mx-auto mb-6'>
                  <button
                    className='px-4 mx-auto mt-4 py-2 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                    type='submit'
                    onClick={() => setTiggered(false)}
                  >
                    Add More
                  </button>
                  <button
                    className='px-4 mx-auto mt-4 py-2 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 md:my-0 text-white bg-yellow-800 bg-opacity-60'
                    type='submit'
                    onClick={() => setTiggered(true)}
                  >
                    Pay
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
