import React from 'react';
import './styles.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import hamburguesas from '../../../productos';



export default function ItemDetailContainer() {

    const [item, setItem] = useState([])

    const params = useParams()
    const idProduct = params.idProducto

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                let encontrado = hamburguesas.find((item) => item.id === Number(idProduct)); resolve(encontrado);
            }, 1000)
        });
        promesaItem.then((respuesta) => setItem(respuesta));
    }, [])
    return (
        <div className="">
            <ItemDetail item={item} />
        </div>
    )
}
