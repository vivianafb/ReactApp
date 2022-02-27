import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CartProvider = ({ children, item }) => {
  const [products, setProducts] = useState([])
  const [buttonClicked,setButtonClicked] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [quantityItems, setQuantityItems] = useState([])
  const [carrito, setCarrito] = useState([]);

  function addToCarrito(item, quantity) {
    // setButtonClicked(true)
    let cantItems = {...item,quantity}
    setQuantityItems([...quantityItems,quantity])
    setCartItems([...cartItems,cantItems])

  }
  function removeItem (itemId){
    let result = cartItems.filter((element) =>element.id !== itemId)
    setCartItems(result)
  }
  function isInCart (id) {
    let isIdInCart = false;
    let productIsInCart = products.find(p=>p.id===id);
    if(productIsInCart){
      return true
    }
    return false
  }
  return (
    <CarritoContext.Provider value={{ addToCarrito, carrito,cartItems }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartProvider;
