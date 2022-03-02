import React  from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
   <Link className="product__item" to={`/item/${product.id}`}>
    <a>
      <div
        className="product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="product__text">
        <div className="product__title">{product.name}</div>
        <div className="product__price">{product.price}</div>
        <button className="detailsButton">Details</button>
      </div>
    </a></Link>
  );
};
export default Item;
