async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
  }

  import Link from "next/link";
  
  export default async function Products() {
    const data = await getProducts();
    const products = data.products; // 'products' is an array inside the fetched JSON
  
    return (
      <>
        {products.map((product) => (
          <div key={product.id} >
            <Link href={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
            </Link>
           
          </div>
        ))}
      </>
    );
  }
  