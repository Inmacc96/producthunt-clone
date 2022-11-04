import styles from "../styles/ProductDetails.module.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ProductDetails = ({ product }) => {
  const {
    id,
    comments,
    created,
    description,
    company,
    name,
    url,
    image,
    votes,
  } = product;

  return (
    <li className={styles.liProduct}>
      {/* Description */}
      <div className={styles.info}>
        <div>
          <img src={image} className={styles.img} />
        </div>

        <div>
          <a className={styles.title}>{name}</a>

          <p className={styles.description}>{description}</p>

          <div className={styles.comments}>
            <div>
              <img src="/static/img/comment.png" />
              <p>{comments.length} Comments</p>
            </div>
          </div>

          <p>Published ago: {formatDistanceToNow(new Date(created))}</p>
        </div>
      </div>

      {/*  Votes */}
      <div className={styles.votes}>
        <div>&#9650;</div>
        <p>{votes}</p>
      </div>
    </li>
  );
};

export default ProductDetails;
