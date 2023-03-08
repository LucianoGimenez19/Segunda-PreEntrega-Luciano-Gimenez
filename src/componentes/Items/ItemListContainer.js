import React, { useState, useEffect } from 'react';
import './styles.scss';
import hamburguesas, { getFech } from '../../productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function getItemsByCategoryFromDatabase(categoryURL) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productosFiltrados = hamburguesas.filter(item => item.category === categoryURL)
            resolve(productosFiltrados)
        }, 1000);
    });
}

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const params = useParams();
    const idCategory = params.idCategory;

    async function leerDatos() {
        if (idCategory === undefined) {
            let respuesta = await hamburguesas;
            setProductos(respuesta);
        } else {
            let respuesta = await getItemsByCategoryFromDatabase(idCategory);
            setProductos(respuesta);
        }
    }

    useEffect(() => {
        leerDatos()
    }, [idCategory])

    return (
        <div>
            <h1 className='titulo'>Nuestras Hamburguesas</h1>
            <div className='card-container container'>
                <ItemList Prod={productos} />
            </div>
        </div>

    )
}
export default ItemListContainer;