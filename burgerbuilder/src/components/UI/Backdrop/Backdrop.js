import React from 'react';
import Classes from './Backdrop.css'


const BackDrop = (props) => (

props.show ? <div className = {Classes.Backdrop} onClick = {props.clicked}></div> : null

);


export default BackDrop;