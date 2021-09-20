import React from 'react';
import products from "../products";
import Product from "../components/Product";
import {Col, Row} from "react-bootstrap";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
            {products.map((product) => (
                <Col xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
                </Col>
            ))}
            </Row>
        </>
    );
};

export default HomeScreen;
