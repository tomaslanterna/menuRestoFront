import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = ({product}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.productDescription}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default MenuItem