import React, { useContext } from 'react'
import Item from '../Item/Item'
import { CarritoContext } from '../../context/CartProvider'
function Cart() {
  const { cartItems } = useContext(CarritoContext);

  return (
    
      <div className="product__grid">
        {cartItems.map((e)=>
        <section className="items">
        <div className="items__content container container--pall">
          {/* <div
            className="item__image"
            style={{ backgroundImage: `url(${e.image})` }}
          ></div> */}
          <div className="item__text">
            <div className="item__title">{e.name}</div>
            <div className="item__price">${e.price}</div>
           
            <div className="item__description">
              Cantidad: {e.quantity}
            </div>
            
          </div>
        </div>
      </section>)}
      </div>

  )
}

export default Cart