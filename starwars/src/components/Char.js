import React from 'react'
import './Char.css'

const Char = props => {
    return (
        <div className="description">
            <h2>{props.charProps.name}</h2>
            <ul>
            <li> 
                <strong>Height: </strong>
                {props.charProps.height}
            </li>
            <li> 
                <strong>Mass: </strong>
                {props.charProps.mass}
            </li>
            <li> 
                <strong>Hair Color: </strong>
                {props.charProps.hair_color}
            </li>
            <li> 
                <strong>Skin Color: </strong>
                {props.charProps.skin_color}
            </li>
            </ul>
        </div>
    )
}

export default Char;