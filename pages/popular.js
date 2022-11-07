import ProductDetails from "../components/ProductDetails";
import useProducts from "../hooks/useProducts";
import styles from "../styles/Home.module.css";

export default function Popular() {
  const { products } = useProducts("votes");

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
