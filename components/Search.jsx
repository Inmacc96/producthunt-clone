import styles from "../styles/Search.module.css";

const Search = () => {
  return (
    <form className={styles.formSearch}>
      <input type="text" className={styles.inputText}
      placeholder="Search Products" />

      <button type="submit" className={styles.inputSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
