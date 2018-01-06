import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

state = {

    showSideDrawer : false
}


SideDrawerClosedhandler = () =>{
this.setState({showSideDrawer : false});

}

sideDrawerOpenHandler = () =>{

this.setState((prevState)=>{return {showSideDrawer : !prevState.showSideDrawer}});


}

render(){

return(
    <Aux>
    <Toolbar openSideDrawer = {this.sideDrawerOpenHandler}/>
    <SideDrawer open  = {this.state.showSideDrawer} closed = {this.SideDrawerClosedhandler}/>
    <main className = {Classes.Content}>{this.props.children}</main>
    </Aux>

);

}
}


export default Layout;