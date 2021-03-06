import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';


const SideDrawer = (props) =>{
let attachClasses = [Classes.SideDrawer, Classes.Close]

if(props.open){

    attachClasses = [Classes.SideDrawer, Classes.Open]
}
return (

    <Aux>
    <Backdrop show={props.open} clicked = {props.closed}/>
    <div className = {attachClasses.join(' ')}>
    
    <div className = {Classes.Logo}>
    <Logo />
    </div>
    <nav>
    <NavigationItems />
    </nav>    
    </div>
    </Aux>


);

}



export default SideDrawer;