import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id,orderData) => {

return {

    type : actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId : id,
    orderData : orderData

}

}


export const purchaseBurgerFailed = (error) => {

    return {

        type : actionTypes.PURCHASE_BURGER_FAILURE,
        error : error

    }
}


export const purchaseBurgerStart = () => {

    return {

        type : actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {

    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))})
            .catch(error => {
                dispatch(purchaseBurgerFailed(error))
            }) 
    }
}

export const purchaseInit = () => {

    return {

        type : actionTypes.PURCHASE_INIT
    }
}


export const fetchOrdersSuccess = (orders) => {

    return {

        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : orders
    }
}

export const fetchOrdersFailed = (error) => {
return {

    type : actionTypes.FETCH_ORDERS_FAILED,
    error : error
}

}

export const fetchOrderStart = () => {

    return {

        type : actionTypes.FETCH_ORDERS_START
    }
}


export const fetchOrders = () => {

return dispatch => {
dispatch(fetchOrderStart());
axios.get('/orders.json')
.then(response =>{
    console.log(response.data);
    const fetchedOrders = [];
    for(let key in response.data){

        fetchedOrders.push({...response.data[key],id:key})

    }
dispatch(fetchOrdersSuccess(fetchedOrders))

})
.catch(error=>{

    dispatch(fetchOrdersFailed(error))
})


}



}