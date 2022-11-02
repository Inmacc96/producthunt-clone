import { useContext } from "react";
import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FirebaseContext } from "../firebase";
import { logOut } from "../firebase";

const Header = () => {
  const { user } = useContext(FirebaseContext);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

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
          {user.displayName ? (
            <>
              <p className={styles.userGreetings}>Hola: {user.displayName}</p>
              <Link
                href="/"
                className={`${styles.button} ${styles.buttonDark}`}
                onClick={handleLogOut}
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
