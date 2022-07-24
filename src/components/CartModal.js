import React from 'react'
import { Modal } from 'react-bootstrap'


const CartModal = ({state,items}) => {
  return (
    <Modal 
    show={state}
    centered
    size="lg"
      aria-labelledby="contained-modal-title-vcenter"F>
        <Modal.Header closeButton>
            Carrito
        </Modal.Header>
        <Modal.Body>
            {items.map(it=><p key={it.productId}>{it.productName}</p>)}
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    </Modal>
  )
}

export default CartModal