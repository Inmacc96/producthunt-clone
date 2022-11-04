import { useState } from "react";
import styles from "../styles/Form.module.css";

//Validaciones
import useValidation from "../hooks/useValidation";
import validateNewProduct from "../validation/validateNewProduct";

const INITIAL_STATE = {
  name: "",
  company: "",
  image: "",
  url: "",
  description: "",
};

export default function NewProduct() {
  const [errorNewProduct, setErrorNewProduct] = useState("");

  const { data, error, handleChange, handleSubmit, handleBlur } = useValidation(
    INITIAL_STATE,
    validateNewProduct,
    createNewProduct
  );

  const { name, company, image, url, description } = data;

  async function createNewProduct() {}

  return (
    <>
      <h1>New Product</h1>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <fieldset className={styles.fieldset}>
          <legend>General Information</legend>

          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.name && <p className={styles.error}>{error.name}</p>}

          <div className={styles.field}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              placeholder="Company Name"
              name="company"
              value={company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.company && <p className={styles.error}>{error.company}</p>}

          <div className={styles.field}>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              value={image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.image && <p className={styles.error}>{error.image}</p>}

          <div className={styles.field}>
            <label htmlFor="url">Url</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="URL of your product"
              value={url}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.url && <p className={styles.error}>{error.url}</p>}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>About your Product</legend>

          <div className={styles.field}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.description && (
            <p className={styles.error}>{error.description}</p>
          )}
        </fieldset>

        <input
          type="submit"
          value="Create Product"
          className={styles.inputSubmit}
        />

        {errorNewProduct && <p className={styles.error}>{errorNewProduct}</p>}
      </form>

      <style jsx>
        {`
          h1 {
            text-align: center;
            margin-top: 5rem;
          }
        `}
      </style>
    </>
  );
}
