import React from 'react'
import { Button } from 'react-bootstrap'

var restos = [
    {
        name: "La Familia",
        description: "Resto prueba",
        mesas: [
            { idMesa: 1, name: "Mesa-1" },
            { idMesa: 2, name: "Mesa-2" },
            { idMesa: 3, name: "Mesa-3" },
            { idMesa: 4, name: "Mesa-4" },
            { idMesa: 5, name: "Mesa-5" },
            { idMesa: 6, name: "Mesa-6" },
            { idMesa: 7, name: "Mesa-7" },
            { idMesa: 8, name: "Mesa-8" },
            { idMesa: 9, name: "Mesa-9" },
        ],
        menu: [
            { productId: 1, productName: "Papas fritas", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 2, productName: "Hamburguesa", productPrice: 500, productDescription: "con o sin sal" },
            { productId: 3, productName: "Churrasco", productPrice: 200, productDescription: "con o sin sal" },
            { productId: 4, productName: "Ravioles", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 5, productName: "Fideos", productPrice: 150, productDescription: "con o sin sal" },
            { productId: 6, productName: "Asado", productPrice: 250, productDescription: "con o sin sal" },
            { productId: 7, productName: "Tarta", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 8, productName: "Guiso", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 9, productName: "Pizza", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 10, productName: "Faina", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 11, productName: "Calzone", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 12, productName: "Chivito", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 13, productName: "Picada", productPrice: 100, productDescription: "con o sin sal" },
        ],
        image: null
    },
    {
        name: "El mejor resto",
        description: "Resto prueba2",
        mesas: [
            { idMesa: 1, name: "Mesa-1" },
            { idMesa: 2, name: "Mesa-2" },
            { idMesa: 3, name: "Mesa-3" },
            { idMesa: 4, name: "Mesa-4" },
            { idMesa: 5, name: "Mesa-5" },
            { idMesa: 6, name: "Mesa-6" },
            { idMesa: 7, name: "Mesa-7" },
            { idMesa: 8, name: "Mesa-8" },
            { idMesa: 9, name: "Mesa-9" },
        ],
        menu: [
            { productId: 1, productName: "Papas fritas", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 2, productName: "Hamburguesa", productPrice: 500, productDescription: "con o sin sal" },
            { productId: 3, productName: "Churrasco", productPrice: 200, productDescription: "con o sin sal" },
            { productId: 4, productName: "Ravioles", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 5, productName: "Fideos", productPrice: 150, productDescription: "con o sin sal" },
            { productId: 6, productName: "Asado", productPrice: 250, productDescription: "con o sin sal" },
            { productId: 7, productName: "Tarta", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 8, productName: "Guiso", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 9, productName: "Pizza", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 10, productName: "Faina", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 11, productName: "Calzone", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 12, productName: "Chivito", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 13, productName: "Picada", productPrice: 100, productDescription: "con o sin sal" },
        ],
        image: null
    },
    {
        name: "La tortu",
        description: "Resto prueba4",
        mesas: [
            { idMesa: 1, name: "Mesa-1" },
            { idMesa: 2, name: "Mesa-2" },
            { idMesa: 3, name: "Mesa-3" },
            { idMesa: 4, name: "Mesa-4" },
            { idMesa: 5, name: "Mesa-5" },
            { idMesa: 6, name: "Mesa-6" },
            { idMesa: 7, name: "Mesa-7" },
            { idMesa: 8, name: "Mesa-8" },
            { idMesa: 9, name: "Mesa-9" },
        ],
        menu: [
            { productId: 1, productName: "Papas fritas", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 2, productName: "Hamburguesa", productPrice: 500, productDescription: "con o sin sal" },
            { productId: 3, productName: "Churrasco", productPrice: 200, productDescription: "con o sin sal" },
            { productId: 4, productName: "Ravioles", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 5, productName: "Fideos", productPrice: 150, productDescription: "con o sin sal" },
            { productId: 6, productName: "Asado", productPrice: 250, productDescription: "con o sin sal" },
            { productId: 7, productName: "Tarta", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 8, productName: "Guiso", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 9, productName: "Pizza", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 10, productName: "Faina", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 11, productName: "Calzone", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 12, productName: "Chivito", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 13, productName: "Picada", productPrice: 100, productDescription: "con o sin sal" },
        ],
        image: null
    },
    {
        name: "Lo de juan",
        description: "Resto prueba",
        mesas: [
            { idMesa: 1, name: "Mesa-1" },
            { idMesa: 2, name: "Mesa-2" },
            { idMesa: 3, name: "Mesa-3" },
            { idMesa: 4, name: "Mesa-4" },
            { idMesa: 5, name: "Mesa-5" },
            { idMesa: 6, name: "Mesa-6" },
            { idMesa: 7, name: "Mesa-7" },
            { idMesa: 8, name: "Mesa-8" },
            { idMesa: 9, name: "Mesa-9" },
        ],
        menu: [
            { productId: 1, productName: "Papas fritas", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 2, productName: "Hamburguesa", productPrice: 500, productDescription: "con o sin sal" },
            { productId: 3, productName: "Churrasco", productPrice: 200, productDescription: "con o sin sal" },
            { productId: 4, productName: "Ravioles", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 5, productName: "Fideos", productPrice: 150, productDescription: "con o sin sal" },
            { productId: 6, productName: "Asado", productPrice: 250, productDescription: "con o sin sal" },
            { productId: 7, productName: "Tarta", productPrice: 400, productDescription: "con o sin sal" },
            { productId: 8, productName: "Guiso", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 9, productName: "Pizza", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 10, productName: "Faina", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 11, productName: "Calzone", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 12, productName: "Chivito", productPrice: 100, productDescription: "con o sin sal" },
            { productId: 13, productName: "Picada", productPrice: 100, productDescription: "con o sin sal" },
        ],
        image: null
    }
]

const SubirData = () => {


    const createData=()=>{
        restos.forEach(res=>{
            fetch('http://localhost:3800/resto', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "name": res.name,
                "description": res.description,
                "mesas":res.mesas,
                "menu":res.menu,
                "image":res.image
            }),
        });
        }).then(response=>response.json())
        .then(data=>{console.log(data)});
    }

    return (
        <Button onClick={createData}>Subir datos</Button>
    )
}

export default SubirData
