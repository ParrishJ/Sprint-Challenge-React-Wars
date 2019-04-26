import React from 'react'
import Char from './Char'

function Charlist (props) {
  return (
    <ul>
        {props.charAttrs.map(charProps => {
          return(
               <Char charProps={charProps} />
          )
        })}
    </ul>
  );
} 

export default Charlist;