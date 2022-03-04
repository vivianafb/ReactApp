import React from 'react'
import useFireStore from '../../hooks/useFireStore';

const Order = () => {
    const { order } = useFireStore();
     console.log(order)
  return (
    <div>
        <h1>Tu compra ha sido exitosa!</h1>
        <p>{order}</p>

    </div>
  )
}

export default Order