import { React, useState, useEffect } from "react";
import ManageProduct from "./ManageProduct";

const ManageAllProducts = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    fetch(`https://boiling-badlands-82832.herokuapp.com/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
        setLoading(false);
      });
  }, [rerender]);

  const deleteProduct = (id) => {
    const permission = window.confirm("Are you sure want to remove ?");
    if (permission) {
      fetch(
        `https://boiling-badlands-82832.herokuapp.com/delete-product/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setRerender(!rerender);
        });
    }
  };
  const editProduct = (id) => {
    const permission = window.confirm(
      "Editing product functionality is comming soon."
    );
  };

  return (
    <div className='pt-24 pb-12'>
      <h1 className='text-center text-4xl font-semibold pb-12'>
        Manage All Products
      </h1>
      {loading ? (
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      ) : (
        <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {allproducts.map((product) => (
            <ManageProduct
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            ></ManageProduct>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAllProducts;
