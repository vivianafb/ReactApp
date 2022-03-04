import React from 'react'
import useFireStore from '../../hooks/useFireStore';

const Order = () => {
    const { orderCart } = useFireStore();
     console.log(orderCart)
  return (
    <div>
        <h1>Tu compra ha sido exitosa!</h1>
        <p>{orderCart}</p>

    </div>
  )
}

export default Order