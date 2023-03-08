import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={prod.img} alt={prod.nombre} />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <h6 className="card-subtitle mb-2 ">${prod.precio}</h6>
                <Link to={`/items/${prod.id}`} className="btn btn-warning">Ver más</Link>
            </div>
        </div>
    );
};


export default Item;