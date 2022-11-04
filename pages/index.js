import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { getData } from "../firebase";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener los productos de la base de datos de Firebase
    const getProducts = async () => {
      const results = await getData();

      const updatedProducts = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(updatedProducts);
    };

    getProducts();
  }, []);
  return (
    <div className={styles.listProducts}>
      <div className={styles.container}>
        <ul className={styles.bgWhite}>
          {products.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
