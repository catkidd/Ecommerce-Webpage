import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const singleProduct = () => {
  const product = useSelector((state) => state.products);

  return (
    <>
      <h1>Product Detail</h1>
      <img src={product.image} alt={product.title} style={{ width: 200 }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Button>Add to cart</Button>
    </>
  );
};

export default singleProduct;
