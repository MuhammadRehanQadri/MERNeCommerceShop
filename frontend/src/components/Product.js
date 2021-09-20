import React from 'react';
import {Card} from "react-bootstrap";

const Product = ({product}) => {
    return (
        <Card className='p-3 my-3'>
            <Card.Img variant='top' src={product.image}></Card.Img>

            <Card.Body>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                <Card.Text as='div'>
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as='h2'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
