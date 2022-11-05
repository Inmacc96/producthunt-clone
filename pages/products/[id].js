import { useEffect } from "react";
import { useRouter } from "next/router";
const Product = () => {
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    //Nos vamos a esperar a que haya un id para realizar la consulta
    if (id) {
      console.log("Ya hay un id", id);
    }
  }, [id]);
  return <h1>Desde {id}.js</h1>;
};

export default Product;
