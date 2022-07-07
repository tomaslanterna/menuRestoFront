import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../style/styles.css';

const MenuItem = ({product}) => {
  return (
    <Card className='tarjeta-rest'>
        <Card.Body className='wrap-text_tarjeta-rest'>
        <Card.Img variant="top" src="https://img1.freepng.es/20191008/wgh/transparent-dish-food-cuisine-ingredient-bouillabaisse-5da27f1e5816e2.1440174715709304623608.jpg"/>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.productDescription}</Card.Text>
            <div className='cta-wrap_tarjeta-rest'>
              <div className='precio_tarjeta-rest'>
                <span></span>
              </div>
                <Button className='cta_tarjeta-rest'>Hola</Button>
            </div>
        </Card.Body>
    </Card>
  )
}

export default MenuItem