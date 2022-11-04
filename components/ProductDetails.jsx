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
      <div>
        <div></div>

        <div>
          <h1>{name}</h1>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default ProductDetails;
