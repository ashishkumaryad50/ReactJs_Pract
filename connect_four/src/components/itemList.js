import React from 'react'
import './itemList.css'
// import Card from './Card';
import {Link} from 'react-router-dom'
const ItemList = (props) => {
    return (
        <>
            {/* <Card > */}
            <Link to={props.action}>
                 <div className='item'>
                        <h2>{ props.itemName}</h2>
                        </div>
                </Link>
            {/* </Card> */}
        </>
    );
}

export default ItemList;