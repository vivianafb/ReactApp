import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CarritoContext } from "../../context/CartProvider";
import ModalDetail from "../Modal/ModalDetail";
import "./ItemCount.css";

const ItemCount = ({ stock, item }) => {

  const [contador, setContador] = useState(1);


  const { addToCarrito, sumTotal, addModal,handleShow,handleClose,show } = useContext(CarritoContext);
  const onAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  };
  const onRest = () => {
    if (contador <= stock && contador !== 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };

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
        <button
          className="buttonCart"
          onClick={() => {
            addToCarrito(item, contador);
            handleShow();
          }}
        >
          Agregar al carrito
        </button>
          
      </div>
     <ModalDetail item={item}/>
    </div>
  );
};

export default ItemCount;
