import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import cartContext from '../context/CartContext';
import '../style/styles.css';

const MenuItem = ({product}) => {


  const {cart,addItem,totalCart}=useContext(cartContext)

  const saveProduct=(prod)=>{
    addItem(prod)
    totalCart(prod)
  }


  return (
    <Card className='tarjeta-rest col-md-4 col-lg-3 col-sm-12'>
        <Card.Body className='wrap-text_tarjeta-rest'>
        <Card.Img variant="top" src="https://img1.freepng.es/20191008/wgh/transparent-dish-food-cuisine-ingredient-bouillabaisse-5da27f1e5816e2.1440174715709304623608.jpg"/>
            <Card.Title className='product-Name'>{product.productName}</Card.Title>
            <Card.Text>{product.productDescription}</Card.Text>
            <div className='cta-wrap_tarjeta-rest'>
              <div className='precio_tarjeta-rest'>
                <span>$ {product.productPrice}</span>
              </div>
                <Button className='cta_tarjeta-rest' onClick={()=>{saveProduct(product)}}>Agregar al carrito</Button>
            </div>
        </Card.Body>
    </Card>
  )
}

export default MenuItem