import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const history = useHistory();

  const [plandata, setPlandata] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const [ifsaved, setIfsaved] = useState(false);

  const handlePlanData = (e) => {
    const data = { ...plandata };
    data[e.target.id] = e.target.value;
    setPlandata(data);
    setIfsaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://bloodcurdling-warlock-64846.herokuapp.com/add-plans",
        plandata
      )
      .then((res) => {
        console.log(res);
        setPlandata({
          name: "",
          description: "",
          image: "",
          price: "",
        });
        setIfsaved(true);
        e.target.reset();
        history.push("/all-plans");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=' flex flex-col pt-10 pb-20'>
      <h1 className='text-center text-4xl font-semibold pb-12'>Add Product</h1>
      <form
        class='w-full mx-auto md:max-w-3xl md:px-8 py-12 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50 shadow-md'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-first-name'
            >
              Product Name
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              id='name'
              value={plandata.name}
              placeholder='plan name'
              onChange={(e) => handlePlanData(e)}
            />
          </div>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              class='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Description
            </label>
            <textarea
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              placeholder='description'
              id='description'
              onChange={(e) => handlePlanData(e)}
            >
              {ifsaved ? "" : plandata.description}
            </textarea>
          </div>

          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              class='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Image Link
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='image'
              value={plandata.image}
              placeholder='image link'
              onChange={(e) => handlePlanData(e)}
            />
          </div>

          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
            <label
              class='block tracking-wide text-white text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Price
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='price'
              value={plandata.price}
              placeholder='amount'
              onChange={(e) => handlePlanData(e)}
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <button
            className='mx-auto px-4 mr-2 font-semibold py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-90 my-2 md:my-0 text-black bg-gray-100'
            type='submit'
          >
            <i class='fas fa-plus-square text-2xl'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
