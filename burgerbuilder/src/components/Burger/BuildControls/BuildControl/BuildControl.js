import React from 'react';
import Classes from './BuildControl.css';

const BuildControl = (props) =>(

   <div className = {Classes.BuildControl}>
   
    <div className = {Classes.Label}>{props.label}</div>
    <button 
    className = {Classes.Less} 
    onClick={props.removeIngredient}
    disabled = {props.disabled}>Less</button>
    <button className = {Classes.More} onClick = {props.addIngredient}>More</button>
   
   </div>

)

export default BuildControl;