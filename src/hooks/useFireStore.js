import React, { useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase";
import { useNavigate } from "react-router-dom";
const useFireStore = () => {
  const [products, setProducts] = useState([]);
  const [productsDetail, setProductsDetail] = useState({});
  const [orderCart, setOrderCart] = useState([]);
  let navigate = useNavigate();

  const getData = async ({ categoryId }) => {
    try {
      const data = collection(db, "items");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      if (categoryId) {
        const productCategory = result.filter(
          (product) => product.category.id === categoryId
        );

        setProducts(productCategory);
      } else {
        setProducts(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getById = async ({ id }) => {
    try {
      const document = doc(db, "items", id);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setProductsDetail(result);
    } catch (err) {
      console.log(err);
    }
  };

  const generateOrder = async ({ data }) => {
    try {
      const col = collection(db, "orders");
      await addDoc(col, data);
      data.items.map((e) => {
        updatingStock(e.id, e.stock - e.quantity);
      });
    } catch (err) {
      console.log(err);
    }
  };

  
  const updatingStock = async (id, stock) => {
    const itemsOrder = doc(db, "items", id);

    try {
      await updateDoc(itemsOrder, { stock: stock });
        let path = '/order'
      navigate(path)
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getData,
    products,
    productsDetail,
    orderCart,
    generateOrder,
    getById,
  };
};

export default useFireStore;
