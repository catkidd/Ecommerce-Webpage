import React from "react";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import { addToCart } from "src/redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
// import Counter from "../Counter/Counter";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAdd = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    router.push({ pathname: "/singleProduct" });
  };

  return (
    <>
      <Card className="card-container" style={{ width: "20rem", height: "auto" }}>
        <div
          style={{
            background: "white",
            height: "15rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <div
            style={{
              width: "9rem",
            }}
          >
            <Card.Img
              className="img-fluid"
              variant="top"
              loading="lazy"
              src={props.productData.image}
            />
          </div>
        </div>
        <Card.Body>
          <Card.Title className="card-title">{props.productData.title}</Card.Title>
          <Card.Text className="card-price">$ {props.productData.price}</Card.Text>

          <StarRatings
            rating={props.productData.rating.rate}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="22px"
            starSpacing="2px"
            className="star-ratings"
          />

          <span className="ms-2">({props.productData.rating.rate})</span>

          <Button
            className="d-flex align-item-center my-3 mx-auto border-0"
            onClick={(e) => handleAdd(e, props.productData)}
            variant="contained"
            startIcon={<AddShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
