import React, { useContext, useEffect, useState } from 'react'
import MenuResto from '../components/MenuResto'
import BannerResto from '../components/BannerResto';
import '../style/styles.css';
import BannerRestoTwo from '../components/BannerRestoTwo';
import ButtonCart from '../components/ButtonCart';
import { Navbar } from 'react-bootstrap';
import cartContext from '../context/CartContext';
import { useParams } from 'react-router-dom';
import CartModal from '../components/CartModal';

const RestoProfile = () => {

    const [resto, setResto] = useState([]);
    const{cart}=useContext(cartContext);
    const {restoId,mesaId}=useParams();
    const [showCart, setshowCart] = useState(false)
    
    const mostrarCart=(value)=>{
        setshowCart(value)
        return(
            <CartModal state={showCart} items={cart}/>
        )
    }



    /*62951f2bf1f7d56e547fa7a7
    6293bbda162c76cd6689a903
    */

    useEffect(() => {
        const getResto = () => {
            fetch(`http://localhost:3800/resto/${restoId}/${mesaId}`, {
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(response => response.json())
                .then(data => { setResto(data.resto.menu) });
        }
        getResto();
    }, [])


    return (
        <div className='container-restoProfile'>
            <BannerResto />
            <div className='menuResto-position'>
                <MenuResto menuResto={resto} />
            </div>
            <Navbar className='cart-Button-container'>
            {(cart.length==0)?<></>:<><ButtonCart modal={mostrarCart}/></>}
            </Navbar>
        </div>
    )
}

export default RestoProfile