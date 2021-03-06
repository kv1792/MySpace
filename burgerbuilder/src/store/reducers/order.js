import * as actionTypes from '../actions/actionsTypes';


const initialState = {

    orders : [],
    loading : false,
    purchased : false
};


const reducer = (state=initialState, actions) => {

    switch(actions.type){


        case actionTypes.PURCHASE_INIT : 
        return {

            ...state,
            purchased : false
        }

        case actionTypes.PURCHASE_BURGER_SUCCESS : 
        const newOrder = {
            ...actions.orderData,
            id : actions.id
            

        }
            return {
                ...state, loading : false,
                orders : state.orders.concat(newOrder),
                purchased : true


            }

        case actionTypes.PURCHASE_BURGER_FAILURE:

        return {
            ...state,
            loading : false


        }

        case actionTypes.PURCHASE_BURGER_START : 
        return {

            ...state,
            loading : true
        }

        case actionTypes.FETCH_ORDERS_START : 
        return {

            ...state,
            loading : true
        }

        case actionTypes.FETCH_ORDERS_SUCCESS : 
        return {

            ...state,
            orders : actions.orders,
            loading : false
        }


        case actionTypes.FETCH_ORDERS_FAILED : 
        return {

            ...state,
            loading : false
        }




        default : 
        return state;

    }


};


export default reducer;