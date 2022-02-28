import React, { useContext } from "react";
import Item from "../Item/Item";
import "./Cart.css";
import { CarritoContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, clear, removeItem } = useContext(CarritoContext);
  return cartItems.length ? (
    <div>
      <div className="cart__grid">
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
              <div className="cartitems__image"
              style={{ backgroundImage: `url(${e.image})` }}>
                
              </div>
              <div className="cartitems__text">
                <div className="cartitems__title">{e.name}</div>
                <div className="cartitems__price">${e.price}</div>

                <div className="cartitems__quantity">
                  Cantidad: {e.quantity}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <button className="deleteButton" onClick={clear}>
        Borrar todo
      </button>
    </div>
  ) : (
    <div className="emptyCart">
      <div className="textCart">
        <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" />{" "}
        <h3>Tu carrito esta vacio</h3>
        <button className="shopNowButton">
          <Link to={"/"} className="shopNow">
            Comprar ahora
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
