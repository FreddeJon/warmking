import { useState } from "react";
import { Product } from "../Components/Product";
import { getData } from "../Data/ProductData";

export const Products = () => {
  const [products] = useState(getData());
  return (
    <section>
      <h1 className="products-title">Products</h1>
      <div className="products-container">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </section>
  );
};
