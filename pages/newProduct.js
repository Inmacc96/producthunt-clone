import { useState, useContext, use } from "react";
import { FirebaseContext } from "../firebase";
import { useRouter } from "next/router";
import Error404 from "../components/Error404";
import styles from "../styles/Form.module.css";

import { addProduct, uploadFile } from "../firebase";
import { getDownloadURL } from "firebase/storage";

//Validaciones
import useValidation from "../hooks/useValidation";
import validateNewProduct from "../validation/validateNewProduct";

const INITIAL_STATE = {
  name: "",
  company: "",
  url: "",
  description: "",
};

export default function NewProduct() {
  // States para la subida de imagen
  const [uploading, setUploading] = useState(false);
  const [URLImage, setURLImage] = useState("");

  const [errorNewProduct, setErrorNewProduct] = useState("");

  const { data, error, handleChange, handleSubmit, handleBlur } = useValidation(
    INITIAL_STATE,
    validateNewProduct,
    createNewProduct
  );

  const { name, company, url, description } = data;

  // Hook de routing para redireccionar
  const router = useRouter();

  //Context con las operaciones CRUD de Firebase
  const { user } = useContext(FirebaseContext);

  async function createNewProduct() {
    // Si el usuario no está autenticado, llevar al login
    if (!user) {
      return router.push("/");
    }

    // Crear el objeto del nuevo producto
    const product = {
      name,
      company,
      image: URLImage,
      url,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
      creator: {
        id: user.uid,
        name: user.displayName,
      },
    };

    // Insertarlos en la base de datos
    await addProduct(product);
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    setUploading(true);
    // Subimos la imagen
    const uploadTask = uploadFile(file);

    // Registra eventos para cuando detecte un cambio en el estado de la subida
    uploadTask.on(
      "state_changed",
      //Muestra el progreso de la subida
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      //En caso de error
      (error) => {
        setUploading(false);
        console.log(err);
      },
      () => {
        // Subida completada correctamente
        setUploading(false);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setURLImage(downloadURL);
        });
      }
    );
  };

  if (!user.displayName) return <Error404 title="This page is not visible to you" subtitle="If you wish to access it, please login or register."/>;
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
              accept="image/*"
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
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
