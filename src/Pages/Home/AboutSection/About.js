import React from "react";

const About = () => {
  return (
    <div className='pt-10'>
      <h1 className='text-center text-4xl font-semibold pb-16 mt-20'>
        Welcome to Clativity
      </h1>
      <div className='container md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-yellow-700 bg-opacity-30 py-10'>
        <div className='mx-auto mb-6 flex justify-center items-center'>
          <img
            className='bg-white shadow-md p-4'
            src='https://i.ibb.co/xYy7VMZ/ps10-img1.jpg'
            width='70%'
            alt=''
          />
        </div>

        <div className='text-justify m-auto p-8'>
          <h1 className='text-xl pb-4 font-semibold text-black'>Claytivity</h1>
          Pottery is the process and the products of forming vessels and other
          objects with clay and other ceramic materials, which are fired at high
          temperatures to give them a hard, durable form. <br /> Claytivity is
          the place which cares pottery a lot and a lot of great handmade
          product is here to showcase out culture and also the nostalgious
          memories of everyone. This is a plartform to keep our root and origin
          alive.
        </div>
        <div className='mx-auto mb-6 flex justify-center items-center'>
          <img
            className='bg-white shadow-md p-4'
            src='https://i.ibb.co/bP3bcQr/about.jpg'
            width='70%'
            alt=''
          />
        </div>

        <div className='text-justify m-auto p-8'>
          <h1 className='text-xl pb-4 font-semibold text-black'>Pottery</h1>
          The earliest forms of pottery were made from clays that were fired at
          low temperatures, initially in pit-fires or in open bonfires. They
          were hand formed and undecorated. <br /> Because unglazed biscuit
          earthenware is porous, it has limited utility for the storage of
          liquids or as tableware. However, earthenware has had a continuous
          history from the Neolithic period to today.
        </div>

        <div className='mx-auto mb-6 flex justify-center items-center'>
          <img
            className='bg-white shadow-md p-4'
            src='https://i.ibb.co/vk28wgS/ps16-img1.jpg'
            width='70%'
            alt=''
          />
        </div>

        <div className='text-justify m-auto p-8'>
          <h1 className='text-xl pb-4 font-semibold text-black'>Clay</h1>
          Clay, the basic material of pottery, has two distinctive
          characteristics: it is plastic (i.e., it can be molded and will retain
          the shape imposed upon it); and it hardens on firing to form a brittle
          but otherwise virtually indestructible material that is not attacked
          by any of the agents that corrode metals or organic materials. <br />{" "}
          Firing also protects the clay body against the effects of water. If a
          sun-dried clay vessel is filled with water.
        </div>
      </div>
    </div>
  );
};

export default About;
