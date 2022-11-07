import { useState, useEffect } from "react";
import { getData } from "../firebase";

const useProducts = (order) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener los productos de la base de datos de Firebase
    const getProducts = async () => {
      const results = await getData(order);

      const updatedProducts = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(updatedProducts);
    };

    getProducts();
  }, []);

  return { products };
};

export default useProducts;
