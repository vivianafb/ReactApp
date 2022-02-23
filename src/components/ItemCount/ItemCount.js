import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
function ItemCount(props) {
  const [contador, setContador] = useState(1);
  const [Count, setCount] = useState(false);

  function onAdd() {
    if (contador < props.stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  }
  function onRest() {
    if (contador <= props.stock && contador !== 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  }

  function addToCart() {
    console.log(contador)
    setCount(true);
  }
  return props.stock === 0 ? (
    <div className="ZeroStock">
      <p>Producto sin stock</p>
    </div>
  ) : Count === false ? (
    <div className="divCount">
      <button onClick={onRest} className="buttonCount">
        -
      </button>
      <input id="input" className="inputCount" value={contador}></input>
      <button onClick={onAdd} className="buttonCount">
        +
      </button>
      <div>
        <button className="buttonCart" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  ) : (
    <div className="divCount">
      <div>
        <Link to={"/cart"}>
          <button className="buttonCart">Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCount;
