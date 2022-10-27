import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  const user = false;

  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.containerSearchNav}>
          <Link href="/">
            <p className={styles.logo}> P </p>
          </Link>

          <Search />

          <Nav />
        </div>

        <div className={styles.containerButtons}>
          {user ? (
            <>
              <p className={styles.userGreetings}>Hola: Inma</p>

              <Link
                href="/"
                className={`${styles.button} ${styles.buttonDark}`}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`${styles.button} ${styles.buttonDark}`}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className={`${styles.button} ${styles.buttonLight}`}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;