import Link from "next/link";
import styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/popular">Popular</Link>
      <Link href="/recent">Recent</Link>
    </nav>
  );
};

export default Nav;
