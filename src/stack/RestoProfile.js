import React, { useEffect, useState } from 'react'
import MenuResto from '../components/MenuResto'
import BannerResto from '../components/BannerResto';
import '../style/styles.css';
import BannerRestoTwo from '../components/BannerRestoTwo';
import ButtonCart from '../components/ButtonCart';
import { Navbar } from 'react-bootstrap';

const RestoProfile = () => {

    const [resto, setResto] = useState([]);

    useEffect(() => {
        const getResto = () => {
            fetch('http://localhost:3800/resto/62951f2bf1f7d56e547fa7a7/6293bbda162c76cd6689a903', {
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
                <ButtonCart />
            </Navbar>
        </div>
    )
}

export default RestoProfile