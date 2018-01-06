import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [

    {  label : 'Salad' , type : 'salad' },
    {  label : 'Bacon' , type : 'bacon' },
    {  label : 'Meat' , type : 'meat' },
    {  label : 'Cheese' , type : 'cheese' }


]

const BuildControls = (props) =>(


    <div className = {Classes.BuildControls}>
        
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>{
            
        return <BuildControl 
        key = {ctrl.label} 
        label = {ctrl.label} 
        addIngredient = {()=>props.addIngredient(ctrl.type)}
        removeIngredient = {()=>props.removeIngredient(ctrl.type)}
        disabled = {props.disabled[ctrl.type]}/>    

        })}
    
<button className = {Classes.OrderButton} disabled = {!props.purchaseable} onClick = {props.ordered}>ORDER NOW</button>

    </div>

);


export default BuildControls;