import React, { useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../firebase";
const useFireStore = () => {
  const [products, setProducts] = useState([]);
  const [productsDetail, setProductsDetail] = useState({});

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

    return {
      getData,
      getById,
      products,
      productsDetail,
    };
  };

  return {
    getData,
    products,
    productsDetail,
    getById,
  };
};

export default useFireStore;
