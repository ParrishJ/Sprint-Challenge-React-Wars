import React from 'react'
import Char from './Char'

function Charlist (props) {
  return (
    <ul>
        {props.charAttrs.map(charProps => {
          return(
               <Char charProps={charProps} key={Math.random()} />
          )
        })}
    </ul>
  );
} 

export default Charlist;