import React, { useContext } from "react";
import Item from "../Item/Item";
import "./Cart.css";
import { CarritoContext } from "../../context/CartProvider";
function Cart() {
  const { cartItems, clear,removeItem } = useContext(CarritoContext);

  return (
    <div>
     

      <div className="product__grid">
        {cartItems.map((e) => (
          <section className="items" >
            <div className="items__content container container--pall">
              <div>
                <button className="deleteItemFromCart" onClick={() =>removeItem(e.id)}>x</button>
              </div>
              {/* <div
        className="item__image"
        style={{ backgroundImage: `url(${e.image})` }}
      ></div> */}
              <div className="item__text">
                <div className="item__title">{e.name}</div>
                <div className="item__price">${e.price}</div>

                <div className="item__description">Cantidad: {e.quantity}</div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <button className="deleteButton" onClick={clear}>
        Borrar todo
      </button>
    </div>
  );
}

export default Cart;
