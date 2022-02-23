import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

function ItemDetail({ item }) {

  return (
    <section className="items">
      <div className="items__content container container--pall">
        <div
          className="item__image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="item__text">
          <div className="item__title">{item.name}</div>
          <div className="item__price">${item.price}</div>
          <div className="item__talla">
            <h3>Talla</h3>
            <button className="buttonSizes">XS</button>
            <button className="buttonSizes">S</button>
            <button className="buttonSizes">M</button>
            <button className="buttonSizes">L</button>
            <button className="buttonSizes">XL</button>
          </div>
          <div className="item__description">
            Description: {item.description}
          </div>
          <ItemCount stock={item.stock}/>
          
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
