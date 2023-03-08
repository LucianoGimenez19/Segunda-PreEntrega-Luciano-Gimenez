import React from 'react';
import "./styles.scss";

export default function ItemDetail({ item }) {
    return (
        <div className='card-detail'>
            <div className='card'>
                <h3 className='card-title'>{item.nombre}</h3>
                <img className='card-img' src={item.img} alt={item.nombre} />
                <h4 className='card-price'>${item.precio}</h4>
                <p className='card-desc'>{item.desc}</p>
                <button className='btn button'>Agregar al carrito</button>
            </div>
        </div>
    )
}