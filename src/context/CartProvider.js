import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CartProvider = ({ children, item }) => {
  const [cartItems, setCartItems] = useState([]);
  const [carrito, setCarrito] = useState([]);

  function addToCarrito(item, quantity) {
    let resultado = isInCart(item.id);

    if (!resultado) {
      let cantItems = { ...item, quantity };
      setCartItems([...cartItems, cantItems]);
    } else {
      let pro = cartItems.find((i) => i.id === item.id);
      let total = pro.quantity + quantity;
      
      let newArray = [...cartItems]
      setCartItems([]);
      let update = newArray.map((e) => {
        if (e.id === item.id) {
          return {...e,quantity: total };
        }
        return newArray;
      });
      
      setCartItems(update);

      console.log(update);
    }
  }
  function removeItem(itemId) {
    let result = cartItems.filter((element) => element.id !== itemId);
    setCartItems(result);
  }

  function clear(){
    setCartItems([])
  }

  function isInCart(itemId) {
    return cartItems.some((i) => i.id === itemId);
  }
  return (
    <CarritoContext.Provider value={{ addToCarrito, carrito, cartItems,clear,removeItem }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;
