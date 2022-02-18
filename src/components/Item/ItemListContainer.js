import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ItemList from "./ItemList";


const ItemListContainer =(props) =>{
  const productos = [
    { id: 1,name: "Polera XS Zara", image:"https://i.pinimg.com/564x/e6/a1/84/e6a1840371c36e37ee9e60c228210f18.jpg",price: 12000, stock: 20 },
    { id: 2,name: "Hoodie L", image:"https://i.pinimg.com/564x/a0/a4/fc/a0a4fc9f8a0a3968cfb4a34b1826e377.jpg", price: 25000, stock: 15 },
    { id: 3,name: "Skirt Zara", image:"https://i.pinimg.com/564x/9b/08/d1/9b08d1a847168b25f4f13f33be36e213.jpg", price: 14000, stock: 15 },
    { id: 4,name: "Pink Shirt", image:"https://i.pinimg.com/564x/83/27/42/83274234c28bafbf04548186007606e8.jpg", price: 13000, stock: 23 },
    { id: 5,name: "Sweater M", image:"https://i.pinimg.com/564x/81/76/51/817651c76edabb7864a2b7c3f98f92d8.jpg",price: 20000, stock: 30 },
    { id: 6,name: "Sweater top S", image:"https://i.pinimg.com/564x/50/f0/37/50f03733ec899b606942c1a2d70856a7.jpg", price: 16000, stock: 10 },
    { id: 7,name: "Hoodie M", image:"https://i.pinimg.com/564x/ac/2b/20/ac2b20f6f37eb8088a79796de5b483b2.jpg", price: 23000, stock: 15 },
    { id: 8,name: "Top xs", image:"https://i.pinimg.com/564x/a0/67/dd/a067dda816b46367cd43e59e0e64c2eb.jpg", price: 13000, stock: 23 },
    { id: 9,name: "White Shirt S ", image:"https://i.pinimg.com/564x/d1/c0/13/d1c0133ed68c5eb0dc811d8532c6cca6.jpg", price: 16000, stock: 13 },
    { id: 10,name: "Bron Shirt S", image:"https://i.pinimg.com/564x/97/ee/ba/97eebab8cb3449cc1c47f9bd107e248f.jpg", price: 13000, stock: 23 },
  ];
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    tarea
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(products);
  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}

export default ItemListContainer;
