import { useState } from "react";
import Route from "next/router";
import styles from "../styles/Search.module.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchProduct = (e) => {
    e.preventDefault();

    if (search.trim() === "") return;

    // Redireccionar a /search
    Route.push({
      pathname: "/search",
      query: { q: search },
    });
  };
  return (
    <form className={styles.formSearch} onSubmit={searchProduct}>
      <input
        type="text"
        className={styles.inputText}
        placeholder="Search Products"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className={styles.inputSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
