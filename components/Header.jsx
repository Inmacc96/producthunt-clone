import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div>
          <Link href="/">
            <p className={styles.logo}> P </p>
          </Link>

          <Search />

          <Nav />
        </div>

        <div>
          <p>Hola: Inma</p>

          <button type="button">Log Out</button>
          <Link href="/">Log In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
