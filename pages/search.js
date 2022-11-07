import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useProducts from "../hooks/useProducts";
import ProductDetails from "../components/ProductDetails";
import styles from  "../styles/Home.module.css";

export default function Search() {
  const route = useRouter();

  const {
    query: { q },
  } = route;

  const { products } = useProducts("created");

  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = q?.toLowerCase();
    const filter = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
    setResult(filter);
  }, [q, products]);

  return (
    <div className={styles.listProducts}>
      <div className={styles.container}>
        <ul className={styles.bgWhite}>
          {result.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
