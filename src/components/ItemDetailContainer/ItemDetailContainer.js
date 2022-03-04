import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useFireStore from "../../hooks/useFireStore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productsDetail, getById } = useFireStore();

  useEffect(() => {
    getById({ id });
  }, [productsDetail]);

  return (
    <div>
      <ItemDetail item={productsDetail} />
    </div>
  );
};

export default ItemDetailContainer;
