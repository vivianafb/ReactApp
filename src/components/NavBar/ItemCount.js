import { useState } from "react";

function ItemCount(props) {
  const [contador, setContador] = useState(1);
  let onAdd = () => {
    if (contador < props.stock) {
      return contador + 1;
    } else {
      return contador;
    }
  };
  let onRest = () => {
    if (contador <= props.stock && contador !== 1) {
        return contador - 1;
      } else {
        return contador;
      }
  };
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(onAdd())}>Sumar</button>
      <button onClick={() => setContador(onRest())}>Restar</button>
    </div>
  );
}

export default ItemCount;
