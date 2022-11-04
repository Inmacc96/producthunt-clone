import { useEffect, useState } from "react";
import { getData } from "../firebase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener los productos de la base de datos de Firebase
    const getProducts = async () => {
      const results = await getData();
      results.forEach((doc) =>
        setProducts([...products, { id: doc.id, ...doc.data() }])
      );
    };

    getProducts();
  }, []);
  return <p>Home</p>;
}
