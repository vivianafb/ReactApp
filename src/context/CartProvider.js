import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CartProvider = ({ children, item }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCarrito = (item, quantity) => {
    let resultado = isInCart(item.id);

    if (!resultado) {
      let cantItems = { ...item, quantity };
      setCartItems([...cartItems, cantItems]);
    } else {
      let pro = cartItems.find((i) => i.id === item.id);
      let total = pro.quantity + quantity;
      pro = {...pro,quantity:total}
      
      // setCartItems([]);
      let update = cartItems.map((e) => {
        if (e.id === item.id) {
         e = pro
        }
        return e;
      });
      
      setCartItems(update);

    }
  }
  const removeItem = (itemId) => {
    let result = cartItems.filter((element) => element.id !== itemId);
    setCartItems(result);
  }

  const clear = () =>{
    setCartItems([])
  }

  const isInCart = (itemId) => {
    return cartItems.some((i) => i.id === itemId);
  }
  return (
    <CarritoContext.Provider value={{ addToCarrito, cartItems,clear,removeItem }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;
