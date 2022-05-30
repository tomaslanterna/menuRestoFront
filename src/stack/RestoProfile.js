import React, { useEffect, useState } from 'react'
import MenuResto from '../components/MenuResto'

const RestoProfile = () => {

    const [resto, setResto] = useState({});

    useEffect(() => {
        const getResto=async()=>{
          fetch('http://localhost:3800/resto/629411eede7984d71c4473f4/6293bbda162c76cd6689a903', {
          headers: {
            'Content-type': 'application/json'
          },
        }).then(response => response.json())
          .then(data => { console.log(data)});
        }
        getResto();
      }, [])
  return (
    <MenuResto />
  )
}

export default RestoProfile