import React, { useContext } from "react";

import "./Cart.css";
import { CarritoContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
  const { cartItems, clear, removeItem, total } = useContext(CarritoContext);

  return cartItems.length ? (
    <div>
      <div className="cart__grid">
        <Checkout cartItems={cartItems} total={total} />
        {cartItems.map((e) => (
          <section className="cartitems">
            <div className="cartitems__content container container--pall">
              <div>
                <button
                  className="deleteItemFromCart"
                  onClick={() => removeItem(e.id)}
                >
                  x
                </button>
              </div>
              <div
                className="cartitems__image"
                style={{ backgroundImage: `url(${e.image})` }}
              ></div>
              <div className="cartitems__text">
                <div className="cartitems__title">{e.name}</div>
                <div className="cartitems__price">${e.price}</div>
                <h1>{e.totalPrice}</h1>

                <div className="cartitems__quantity">
                  Cantidad: {e.quantity}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="container divTotal">
        <h1 className="totalCart">Total:{total}</h1>
      </div>
      <button className="deleteButton" onClick={clear}>
        Borrar todo
      </button>
    </div>
  ) : (
    <div className="emptyCart">
      <div className="textCart">
        <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" />{" "}
        <h3 className="h3empy">Tu carrito esta vacio</h3>
        <Link to={"/"} className="shopNow">
          <button className="shopNowButton">Comprar ahora</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
