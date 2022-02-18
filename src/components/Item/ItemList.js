import { render } from "@testing-library/react";
import React from "react";
import Item from "./Item";
import './Item.css'
const ItemList = ({ products }) => {
  return (
    <section className="products">
      <div className="product__content container container--pall">
      <div className="product__grid">
        {products.map((p) => (
          <Item product={p} key={p.id}></Item>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ItemList;
