import Link from "next/link";
import styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/">Popular</Link>
      <Link href="/">Recent</Link>
    </nav>
  );
};

export default Nav;
