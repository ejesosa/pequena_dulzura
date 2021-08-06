import React, { useState } from 'react';
import Button from './Button.jsx';

export default function ItemCount(props){
    const [initial, setInitial] = useState("");
    const [stock, setStock] = useState(props.stock);


    return (
    
        <div className="itemCount">
            <h3>Item Nº1</h3>
            <p>Cantidad de unidades:</p>
            <div>
            <Button 
                text="-" 
                onAdd={() => 
                    setInitial(initial - 1)}/>

            <p className="counter">{initial}</p>

            <Button 
                text="+" 
                onAdd={() => 
                    setInitial(initial + 1)}/>

            </div>

        </div>
    
    );
}