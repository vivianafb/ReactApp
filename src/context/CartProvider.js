import { createContext, useEffect, useState } from "react";
import ModalDetail from "../components/Modal/ModalDetail";
export const CarritoContext = createContext();
const CartProvider = ({ children, item }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const totalPrice = [];

    cartItems.map((element) =>
      totalPrice.push(element.price * element.quantity)
    );

    let sum = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      let suma = (sum += totalPrice[i]);
      setTotal(suma);
    }
  });

  const addToCarrito = (item, quantity) => {
    let resultado = isInCart(item.id);

    if (!resultado) {
      let cantItems = { ...item, quantity };
      setCartItems([...cartItems, cantItems]);
    } else {
      let pro = cartItems.find((i) => i.id === item.id);
      let cantidadTotal = pro.quantity + quantity;
      pro = { ...pro, quantity: cantidadTotal };
      let update = cartItems.map((e) => {
        if (e.id === item.id) {
          e = pro;
        }
        return e;
      });

      setCartItems(update);
    }
  };
  const removeItem = (itemId) => {
    let result = cartItems.filter((element) => element.id !== itemId);
    setCartItems(result);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (itemId) => {
    return cartItems.some((i) => i.id === itemId);
  };

  return (
    <CarritoContext.Provider
      value={{
        addToCarrito,
        cartItems,
        clear,
        removeItem,
        total,
        show,
        handleClose,
        handleShow,
        item,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;
