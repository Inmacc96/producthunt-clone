import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import styles from "../styles/ProductDetails.module.css";

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
          <Link href={`/products/${id}`} className={styles.title}>
            {name}
          </Link>

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
