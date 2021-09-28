import { useParams } from "react-router-dom";

const ProductDeatail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDeatail;
