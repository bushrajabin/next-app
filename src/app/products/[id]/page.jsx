import React from "react";

async function getProduct(id) {
  const res = await fetch("https://dummyjson.com/products/" + id);
  return res.json();
}
export default async function productDetails({ params }) {
  const product = await getProduct(params.id);
  return (
    <div className=" flex flex-col bg-white">
      <nav>
        <h2 className="text-2xl text-center font-bold p-6 underline ">product details</h2>
      </nav>

      <div className="flex flex-col bg-black text-white  rounded-lg m-3 text-center  lg:flex- lg:flex-row lg:text-left">
      <img src={product.thumbnail} alt={product.title} />
        <div className="flex flex-col justify-center lg:w-96 lg:h-96 lg:object-contain">
        <h3 className="font-bold text-xl p-2"> Title:{product.title}</h3>
        <p className=" font-sans text-xl p-2">Description:{product.description}</p>
        <p className="font-bold text-xl p-2">Price: ${product.price}</p>
        </div>
      
     
      </div>
    </div>
  );
}
