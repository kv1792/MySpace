import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import axios from '../../axios-order';
import WithErrorHandler from '../../hoc/WithErrorHandlers/WithErrorHandlers';
import * as actionTypes from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
class Orders extends Component {

componentDidMount(){
this.props.onFetchOrders();

}

render(){

    let orders = <Spinner />
    if(!this.props.loading){
    orders  = this.props.order.map(order=> (<Order key={order.id} ingredients = {order.ingredients} price = {order.price} />))


    }

return <div>{orders}</div>;

}

}
const mapStateToProps = state => {

    return {

        order : state.order.orders,
        loading : state.order.loading
    }
}



const mapDispatchToState = dispatch => {

    return {

        onFetchOrders : () => dispatch(actionTypes.fetchOrders())

    }
}


export default connect(mapStateToProps,mapDispatchToState)(WithErrorHandler(Orders, axios));