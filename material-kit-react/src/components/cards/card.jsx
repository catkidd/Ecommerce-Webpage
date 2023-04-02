import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import { addToCart } from "src/redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Counter from "../Counter/Counter";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const showProductDetail = (e, data) => {
    e.preventDefault();
    dispatch(addToCart(data));
    router.push({
      pathname: "/singleProduct",
    });
  };
  return (
    <>
      <Card 
        onClick={(e) => showProductDetail(e, props.productData)}
        className="card-container"
        style={{ width: "20rem" }}
      >
        <Card.Img variant="top" src={props.productData.image} />
        <Card.Body>
          <Card.Title className="card-title">{props.productData.title}</Card.Title>
          <Card.Text className="card-price">$ {props.productData.price}</Card.Text>

          <StarRatings
            rating={props.productData.rating.rate}
            starRatedColor="red"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            className="star-ratings"
          />

          <span className="ml-2">({props.productData.rating.count} ratings)</span>

          <Button variant="outline-primary">Add To Cart</Button>
          <Counter cardId={props.productData.id} />
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
