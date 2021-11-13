import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const history = useHistory();

  const initial = {
    name: "",
    description: "",
    img: "",
    price: "",
    ratting: "5",
    total_ratings: "1",
  };
  const [productdata, setProductdata] = useState(initial);

  const [ifsaved, setIfsaved] = useState(false);

  const handleproductdata = (e) => {
    const data = { ...productdata };
    data[e.target.id] = e.target.value;
    setProductdata(data);
    setIfsaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/add-product", productdata)
      .then((res) => {
        console.log(res);
        setProductdata(initial);
        setIfsaved(true);
        e.target.reset();
        history.push("/dashboard/manage-products");
      })
      .catch((error) => {
        console.log(error);
      });
  };
      console.log(productdata);

  return (
    <div className=' flex flex-col pt-24'>
      <h1 className='text-center text-4xl font-semibold pb-12'>Add Product</h1>
      <form
        className='w-full mx-auto md:max-w-3xl md:px-8 py-12 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50 shadow-md'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-first-name'
            >
              Product Name
            </label>
            <input
              className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              id='name'
              value={productdata.name}
              placeholder='plan name'
              onChange={(e) => handleproductdata(e)}
            />
          </div>
          <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              className='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Description
            </label>
            <textarea
              className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              placeholder='description'
              id='description'
              onChange={(e) => handleproductdata(e)}
            >
              {ifsaved ? "" : productdata.description}
            </textarea>
          </div>

          <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              className='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Image Link
            </label>
            <input
              className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='img'
              value={productdata.img}
              placeholder='image link'
              onChange={(e) => handleproductdata(e)}
            />
          </div>

          <div className='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              className='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Price
            </label>
            <input
              className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='price'
              value={productdata.price}
              placeholder='amount'
              onChange={(e) => handleproductdata(e)}
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3'>
          <button
            className='mx-auto px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-90 my-2 md:my-0 text-black bg-gray-100'
            type='submit'
          >
            <i className='fas fa-plus-square text-2xl'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
