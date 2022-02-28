import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CartProvider = ({ children, item }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState([]);
  const [carrito, setCarrito] = useState([]);

  function addToCarrito(item, quantity) {
    let resultado = isInCart(item.id);

    if (!resultado) {
      let cantItems = { ...item, quantity };
      setQuantityItems([...quantityItems, quantity]);
      setCartItems([...cartItems, cantItems]);
    } else {
       let pro = cartItems.find((i) => i.id === item.id)
      let total = pro.quantity + quantity;
      
      let update = cartItems.map((e) => {
        if (e.id === item.id) {
          return { ...e,quantity: total };
        }
        return cartItems;
      });
      setCartItems(update)
      console.log(cartItems)
    }
  }
  function removeItem(itemId) {
    let result = cartItems.filter((element) => element.id !== itemId);
    setCartItems(result);
  }

  function isInCart(itemId) {
    return cartItems.some((i) => i.id === itemId);
  }
  return (
    <CarritoContext.Provider value={{ addToCarrito, carrito, cartItems }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;
