import React from "react";

async function getProduct(id) {
  const res = await fetch("https://dummyjson.com/products/" + id);
  return res.json();
}
export default async function productDetails({ params }) {
  const product = await getProduct(params.id);
  return (
    <div>
      <nav>
        <h2>product details</h2>
      </nav>

      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img src={product.thumbnail} alt={product.title} />
      </div>
    </div>
  );
}
