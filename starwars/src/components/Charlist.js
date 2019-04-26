import React from 'react'
import Char from './Char'
import App from '../App'


function Charlist (props) {
  return (
    <ul>
        {props.charList.map(charProps => {
          return(
               <Char charProps={charProps} />
          )
        })}
    </ul>
  );
} 

export default Charlist;