import React  from "react";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <a className="product__item" href={`/item/${product.id}`}>
      <div
        className="product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="product__text">
        <div className="product__title">{product.name}</div>
        <div className="product__price">{product.price}</div>
        <button className="detailsButton">Details</button>
      </div>
    </a>
  );
};
export default Item;
