import { useContext } from "react";
import Link from "next/link";
import { FirebaseContext } from "../firebase";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/popular">Popular</Link>
      {user.displayName && <Link href="/newProduct">New Product</Link>}
    </nav>
  );
};

export default Nav;
