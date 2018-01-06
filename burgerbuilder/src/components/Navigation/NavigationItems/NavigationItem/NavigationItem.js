import React from 'react';
import Classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) => {

return (

<li className = {Classes.NavigationItem}><NavLink exact ={props.exact} activeClassName={Classes.active} to = {props.link}>{props.children}</NavLink></li>

);


}

export default NavigationItem;