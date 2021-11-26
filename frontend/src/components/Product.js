import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="p-3 my-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
