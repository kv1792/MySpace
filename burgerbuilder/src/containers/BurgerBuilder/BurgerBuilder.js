import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandlers/WithErrorHandlers';
import { connect } from 'react-redux';
import * as BurgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

state = {
purchasing : false
}

componentDidMount(){

this.props.onInitIngredients();

}

updatePurchaseableState (ingredients) {

    const sum = Object.keys(ingredients).map(igKey=>{

        return ingredients[igKey];

    }).reduce((sum,el)=>{

        return sum+el;

    },0);

    return sum>0;

}


updatePurchasingState = () =>{
this.setState({purchasing:true});

}

// addIngredientHandler = (type) =>{

//     const oldIngredientCount = this.state.ingredients[type];
//     const newIngredientCount = oldIngredientCount + 1;

//     const updatedIngredients = {...this.state.ingredients};
//     updatedIngredients[type] = newIngredientCount;

//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice + INGREDIENT_PRICES[type];


//     this.setState({
//         ingredients : updatedIngredients,
//         totalPrice : newPrice
//     });

//     this.updatePurchaseableState(updatedIngredients);

// }

// removeIngredientHandler = (type) =>{

//     const oldIngredientCount = this.state.ingredients[type];
//     if(oldIngredientCount <= 0){
//         return;
//     }
//     const newIngredientCount = oldIngredientCount - 1;

//     const updatedIngredients = {...this.state.ingredients};
//     updatedIngredients[type] = newIngredientCount;

//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice - INGREDIENT_PRICES[type];


//     this.setState({
//         ingredients : updatedIngredients,
//         totalPrice : newPrice
//     });

//     this.updatePurchaseableState(updatedIngredients);

// }


modalClosedHandler = () => {

    this.setState({purchasing : false})

}

purhaseContinueHandler = () => {
    
// const queryparams = [];
// for(let i in this.state.ingredients){
//     queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))

// }

// queryparams.push('price=' + this.state.totalPrice);

// const queryString = queryparams.join('&');
this.props.onInitPurchase();
this.props.history.push('/checkout');

}

    render(){

        const disabledInfo = {...this.props.ings};
        for(let key in disabledInfo){

            disabledInfo[key] = disabledInfo[key] <=0;
        }


        let orderSummary = null;
        
         
        
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> :<Spinner />

        if(this.props.ings){
        burger  =  (
            <Aux>
            <Burger ingredients = {this.props.ings} />
            <BuildControls 
            addIngredient = {this.props.onIngredientAdded} 
            removeIngredient = {this.props.onIngredientRemoved}
            disabled = {disabledInfo}
            purchaseable = {this.updatePurchaseableState(this.props.ings)}
            price = {this.props.price}
            ordered = {this.updatePurchasingState}/> 
        </Aux>)

            orderSummary = <OrderSummary ingredients = {this.props.ings} 
            continueOrder = {this.purhaseContinueHandler} 
            cancelOrder = {this.modalClosedHandler}
            totalPrice = {this.props.price}/>; 

        }

       
        return(
            <Aux>
            <Modal show = {this.state.purchasing} modalClosed = {this.modalClosedHandler}>
            {orderSummary}
            </Modal>
            {burger}
            </Aux>
        
        );


    }

}


const mapStateToProps = state => {

return {
    ings : state.burgerBuilder.ingredients,
    price : state.burgerBuilder.totalPrice,
    error : state.burgerBuilder.error
}
}

const mapDispatchToProps = dispatch => {
return {

    onIngredientAdded : (ingName) => dispatch(BurgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved : (ingName) => dispatch(BurgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients : () => dispatch(BurgerBuilderActions.initIngredients()),
    onInitPurchase : () => dispatch(BurgerBuilderActions.purchaseInit())
}

};



export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));