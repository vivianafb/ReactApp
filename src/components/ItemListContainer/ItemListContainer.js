import React from "react";
import db from "../../firebase/index";
import { collection, doc, getDocs, where, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
import useFireStore from "../../hooks/useFireStore";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const { products, getData } = useFireStore();

  useEffect(() => {
    getData({ categoryId });
  }, [products]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
