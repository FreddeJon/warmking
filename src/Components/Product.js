import React from "react";

export const Product = ({ product: { id, price, name, rating } }) => {
  return (
    <article className="product-card">
      <img
        className="product-card-img"
        src={`https://picsum.photos/250/250?${id}`}
        alt="product"
      />
      <p className="product-card-price">{price}kr</p>
      <h2 className="product-card-name">{name}</h2>
      <p className="product-card-rating">{rating}/5</p>
      <p className="product-card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        repellendus?
      </p>
    </article>
  );
};
