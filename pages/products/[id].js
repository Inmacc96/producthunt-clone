import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error404 from "../../components/Error404";

import { getDatabyId } from "../../firebase";

const Product = () => {
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //State product
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

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

  return <>{error && <Error404 />}</>;
};

export default Product;
