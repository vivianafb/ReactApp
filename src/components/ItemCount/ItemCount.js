import { useContext, useState } from "react";
import {CarritoContext} from "../../context/CartProvider";
import "./ItemCount.css";
function ItemCount({ stock, item }) {
  const [contador, setContador] = useState(1);
  const [Count, setCount] = useState(false);
  const {addToCarrito} = useContext(CarritoContext)
  function onAdd() {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  }
  function onRest() {
    if (contador <= stock && contador !== 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  }

  function addToCart() {
    console.log(contador);
    setCount(true);
  }
  return stock === 0 ? (
    <div className="ZeroStock">
      <p>Producto sin stock</p>
    </div>
  ) : (
    <div className="divCount">
      <button onClick={onRest} className="buttonCount">
        -
      </button>
      <input id="input" className="inputCount" value={contador}></input>
      <button onClick={onAdd} className="buttonCount">
        +
      </button>
      <div>
        <button className="buttonCart" onClick={()=>addToCarrito(item,contador)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
