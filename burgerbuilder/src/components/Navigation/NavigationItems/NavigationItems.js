import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Classes from './NavigationItems.css'


const NavigationItems = () =>{

    return (

        <ul className = {Classes.NavigationItems}>
        <NavigationItem link = "/" exact>Burger Builder</NavigationItem>
        <NavigationItem link = "/orders">Orders</NavigationItem>
        <NavigationItem link = "/auth">Authenticate</NavigationItem>
        </ul>


    );
 


}

export default NavigationItems;