import React from 'react';
import { ListGroup } from 'react-bootstrap';
import MenuItem from './MenuItem';


const MenuResto = ({ menuResto }) => {
    return (
        <div>
            {
                <ListGroup>
                    {(menuResto === null || menuResto.lenght === 0) ? <div>Cargando</div> : menuResto.map(it => <ListGroup.Item key={it.productId}><MenuItem product={it}/></ListGroup.Item>)}
                </ListGroup>
            }
        </div>
    )
}

export default MenuResto