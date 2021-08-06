import React from 'react';

export default function Button(props) {
    console.log("props", props);
    return (
        <button className="button counter" onClick={() => props.onAdd()}>
            {props.text}
        </button>
    )
}