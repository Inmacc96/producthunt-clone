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
    <li>
      {/* Description */}
      <div>
        <div>
          <img src={image} className={styles.img} />
        </div>

        <div>
          <h1>{name}</h1>

          <p>{description}</p>

          <div>
            <img src="/static/img/comment.png" />
            <p>{comments.length} Comments</p>
          </div>

          <p>Published ago: {formatDistanceToNow(new Date(created))}</p>
        </div>
      </div>

      {/*  Votes */}
      <div>
        <div>&#9650;</div>
        <p>{votes}</p>
      </div>
    </li>
  );
};

export default ProductDetails;
