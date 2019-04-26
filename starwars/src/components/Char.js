import React from 'react'
import './Char.css'

const Char = props => {
    return (
        <div className="description">
            <h2>{props.charProps.name}</h2>
            <p> 
                <strong>Height: </strong>
                {props.charProps.height}
            </p>
            <p> 
                <strong>Mass: </strong>
                {props.charProps.mass}
            </p>
            <p> 
                <strong>Hair Color: </strong>
                {props.charProps.hair_color}
            </p>
            <p> 
                <strong>Skin Color: </strong>
                {props.charProps.skin_color}
            </p>
        </div>
    )
}

export default Char;