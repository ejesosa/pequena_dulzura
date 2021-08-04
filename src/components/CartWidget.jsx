import React from 'react';
import icono from '../img/cart_icon.png';


export default class CartWidget extends React.Component {

    render(){
        return (
            <div>
                <img className="cartIcon" alt="Carrito" src={icono}/>
            </div>
        )
    }
}