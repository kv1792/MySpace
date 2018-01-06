import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import Classes from './Logo.css'

const Logo = (props) => (
    <div className = {Classes.Logo}>
    <img src = {burgerLogo} alt = "Logo"/>
    </div>
);


export default Logo;