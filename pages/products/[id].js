import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/Error404";
import Spinner from "../../components/Spinner";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { getDatabyId, updateData, deleteData } from "../../firebase";

import styles from "../../styles/Product.module.css";

const Product = () => {
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  // Context Firebase
  const { user } = useContext(FirebaseContext);

  //States del componente
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [comment, setComment] = useState({});

  useEffect(() => {
    //Nos vamos a esperar a que haya un id para realizar la consulta
    if (id) {
      const getProduct = async () => {
        const result = await getDatabyId(id);
        if (result.exists()) {
          setProduct(result.data());
        } else {
          setError(true);
        }
      };

      getProduct();
    }
  }, [id]);

  const {
    comments,
    created,
    description,
    company,
    name,
    url,
    image,
    votes,
    creator,
    votedBy,
  } = product;

  //Administrar y validar los votos
  const handleVoteProduct = async () => {
    if (!user.displayName) {
      return router.push("/login");
    }

    // Obtener y sumar un nuevo voto
    const newTotal = votes + 1;

    // Verificar si el usuario actual ha votado
    if (votedBy.includes(user.uid)) return;

    // Guardar el ID del usuario que ha votado
    const newVoters = [...votedBy, user.uid];

    // Actualizar en la BD
    updateData(id, { votes: newTotal, votedBy: newVoters });

    // Actualizar en el state
    setProduct({ ...product, votes: newTotal, votedBy: newVoters });
  };

  // Funciones para crear comentarios
  const handleChangeComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  // Identifica si el comentario es del creador del producto
  const isCreator = (id) => {
    return creator.id === id;
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!user.displayName) {
      return router.push("/login");
    }

    // Información extra al comentario
    comment.userId = user.uid;
    comment.userName = user.displayName;

    // Tomar copia de comentarios y agregarlo al arreglo
    const newComments = [...comments, comment];

    // Actualizar la BD
    updateData(id, { comments: newComments });

    // Actualizar el state
    setProduct({ ...product, comments: newComments });
  };

  // Función que comprueba si el creador del producto es el mismo que el que está autenticado
  const canDelete = () => {
    if (!user.displayName) return false;

    return creator.id === user.uid;
  };

  //Eliminar un producto de la BD
  const deleteProduct = async () => {
    //Si el usuario no ha iniciado sesión o no es el creado se el redirige a login
    if (!user.displayName) {
      return router.push("/login");
    }

    if (creator.id !== user.uid) {
      return router.push("/login");
    }

    try {
      await deleteData(id);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {error ? (
        <Error404 title="Non-existent product" subtitle="" />
      ) : Object.keys(product).length === 0 ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>{name}</h1>

          <div className={styles.containerProduct}>
            <div>
              <p>Published ago: {formatDistanceToNow(new Date(created))}</p>
              <p>
                By: {creator.name} of {company}
              </p>
              <img src={image} />
              <p>{description}</p>

              {user.displayName && (
                <>
                  <h2>Add your comment</h2>
                  <form onSubmit={handleSubmitComment}>
                    <div className={styles.field}>
                      <input
                        type="text"
                        name="message"
                        onChange={handleChangeComment}
                      />
                    </div>

                    <input
                      type="submit"
                      className={styles.inputSubmit}
                      value="Add comment"
                    />
                  </form>
                </>
              )}

              <h2 className={styles.h2Comments}>Comments</h2>

              {comments.length === 0 ? (
                "No comments yet"
              ) : (
                <ul>
                  {comments.map((comment, i) => (
                    <li
                      key={`${comment.userId}-${i}`}
                      className={styles.comment}
                    >
                      <p>{comment.message}</p>
                      <p>
                        Written by:
                        <span>
                          {""} {comment.userName}
                        </span>
                      </p>
                      {isCreator(comment.userId) && (
                        <p className={styles.creatorProduct}>Is Creator</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <aside>
              <a
                className={`${styles.button} ${styles.buttonDark}`}
                href={url}
                target="_blank"
              >
                Visit URL
              </a>

              <div className={styles.divVotes}>
                <p className={styles.nVotes}>{votes} Votes</p>

                {user.displayName && (
                  <button
                    type="button"
                    className={`${styles.button} ${styles.buttonLight}`}
                    onClick={handleVoteProduct}
                  >
                    Vote
                  </button>
                )}
              </div>
            </aside>
          </div>

          {canDelete() && (
            <button
              type="button"
              className={`${styles.button} ${styles.buttonLight}`}
              onClick={deleteProduct}
            >
              Delete Product
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Product;
