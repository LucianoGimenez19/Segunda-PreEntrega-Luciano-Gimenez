import React from 'react';
import Item from './Item';
import './styles.scss';


const ItemList = ({Prod}) => {
    return (
        Prod.map((prod) => <Item key={prod.id} prod = {prod} />)
    )
}

export default ItemList;