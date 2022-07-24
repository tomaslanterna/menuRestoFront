import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import cartContext from '../context/CartContext';
import '../style/styles.css';


const ButtonCart = ({modal}) => {

  const {cart,total}=useContext(cartContext)

  return (
      <Button className='cta_tarjeta-rest cart-Button col-12' onClick={()=>{modal(true)}}>Ver Orden - ${total}</Button>
  )
}

export default ButtonCart