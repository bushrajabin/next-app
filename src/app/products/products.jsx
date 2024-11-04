async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

import Link from "next/link";

export default async function Products() {
  const data = await getProducts();
  const products = data.products; // 'products' is an array inside the fetched JSON

  return (
    <div className=" flex flex-row flex-wrap justify-center bg-white ">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-black text-white flex  w-80 text-center justify-center items-center p-2 m-4 rounded-lg md:w-80 md:m-6  lg:96  "
        >
          <Link href={`/products/${product.id}`}>
            <h2 className="font-bold p-2">Title:{product.title}</h2>
            <p className="font-sans p-2">Descrption:{product.description}</p>
            <p className="font-bold p-2">Price: ${product.price}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              className=""
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
