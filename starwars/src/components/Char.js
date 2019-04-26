import React from 'react'

const Char = props => {
    return (
        <div className="description">
            <h2>{props.charProps.name}</h2>
            <p> 
                <strong>Mass: </strong>
                {props.charProps.mass}
            </p>
        </div>
    )
}

export default Char;