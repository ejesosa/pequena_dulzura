import React from 'react';
import ItemCount  from './ItemCount';



export default class ItemListContainer extends React.Component {

    render(){
        return (
            <div className="catalogo">
                <h2>{this.props.greeting}</h2>
                <p>Este es el contenedor de Items</p>

                <ItemCount/>

            </div>
        )
    }
}