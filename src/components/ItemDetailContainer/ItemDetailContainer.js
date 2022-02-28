import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const productos = [
    {
      id: 1,
      name: "Polera Zara",
      image:
        "https://i.pinimg.com/564x/e6/a1/84/e6a1840371c36e37ee9e60c228210f18.jpg",
      price: 12000,
      description:"Polera Lila, 100% algodon",
      category:{id:1, title:"tops"},
      stock: 10,
    },
    {
      id: 2,
      name: "Poleron Opposite",
      image:
        "https://i.pinimg.com/564x/a0/a4/fc/a0a4fc9f8a0a3968cfb4a34b1826e377.jpg",
      price: 25000,
      description:"Tops",
      category:{id:1, title:"tops"},
      stock: 15,
    },
    {
      id: 3,
      name: "Mini Falda Opposite",
      image:
        "https://i.pinimg.com/564x/9b/08/d1/9b08d1a847168b25f4f13f33be36e213.jpg",
      price: 14000,
      description:"Mini falda talla S",
      category:{id:2, title:"Bottoms"},
      stock: 15,
    },
    {
      id: 4,
      name: "Top Rosado",
      image:
        "https://i.pinimg.com/564x/83/27/42/83274234c28bafbf04548186007606e8.jpg",
      price: 13000,
      description:"Top rosado de Shein, talla M",
      category:{id:1, title:"tops"},
      stock: 23,
    },
    {
      id: 5,
      name: "Sueter Shein",
      image:
        "https://i.pinimg.com/564x/81/76/51/817651c76edabb7864a2b7c3f98f92d8.jpg",
      price: 20000,
      description:"Sueter verde, talla M",
      category:{id:1, title:"tops"},
      stock: 30,
    },
    {
      id: 6,
      name: "Sueter Marquis",
      image:
        "https://i.pinimg.com/564x/50/f0/37/50f03733ec899b606942c1a2d70856a7.jpg",
      price: 16000,
      description:"Sueter Marquis, talla XS",
      category:{id:1, title:"tops"},
      stock: 10,
    },
    {
      id: 7,
      name: "Poleron Adidas",
      image:
        "https://i.pinimg.com/564x/ac/2b/20/ac2b20f6f37eb8088a79796de5b483b2.jpg",
      price: 23000,
      description:"Poleron adidas lila, talla L",
      category:{id:1, title:"tops"},
      stock: 15,
    },
    {
      id: 8,
      name: "Top Shein",
      image:
        "https://i.pinimg.com/564x/a0/67/dd/a067dda816b46367cd43e59e0e64c2eb.jpg",
      price: 13000,
      description:"Top shein talla XS",
      category:{id:1, title:"tops"},
      stock: 23,
    },
    {
      id: 9,
      name: "Top Manga Larga Shein  ",
      image:
        "https://i.pinimg.com/564x/d1/c0/13/d1c0133ed68c5eb0dc811d8532c6cca6.jpg",
      price: 16000,
      description:"Top shein talla S",
      category:{id:1, title:"tops"},
      stock: 13,
    },
    {
      id: 10,
      name: "Mom Jeans",
      image:
        "https://i.pinimg.com/736x/4c/e3/76/4ce376f1ec9bcaa400dafb7980203c7d.jpg",
      price: 22000,
      description:"Mom Jeans talla 38",
      category:{id:2, title:"Bottoms"},
      stock: 20,
    },
    {
      id: 11,
      name: "Collar",
      image:
        "https://i.pinimg.com/564x/3b/51/9c/3b519cf3b4a7b33ac2e9a612f1fa4dff.jpg",
      price: 5000,
      description:"Collar triple cadena",
      category:{id:3, title:"Accesorios"},
      stock: 50,
    },
    {
      id: 12,
      name: "Cadena",
      image:
        "https://i.pinimg.com/564x/27/1f/be/271fbe1d9ca37420f7859dcbad6efaa8.jpg",
      price: 5000,
      description:"Cadena de corazones",
      category:{id:3, title:"Accesorios"},
      stock: 40,
    },
  ]; 

  const [productsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos[id-1]);
      }, 100);
    });

    tarea
      .then((result) => {
        setProductsDetail(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ItemDetail item={productsDetail} />
    </div>
  );
}

export default ItemDetailContainer;
