import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Classes from './Auth.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
class Auth extends Component {

state = {

controls : {

email : {

                elementType : 'input',
                elementConfig : {

                    type : 'email',
                    placeholder : 'Mail Address'

                },
            value : '',
            validation : {
                required : true,
                isEmail : true
            },
            valid : false,
            touched : false
            },

            password : {

                elementType : 'input',
                elementConfig : {

                    type : 'password',
                    placeholder : 'Password'

                },
            value : '',
            validation : {
                required : true,
                minLength : 5
            },
            valid : false,
            touched : false
            }

},
isSignUp : true

}

switchAuthModeHandler = () => {

    this.setState(prevState => {
        return {isSignUp : !prevState.isSignUp
        }
    });
}


checkValidity = (value, rules) => {

    let isValid = true;
    
    if(rules.required){
        isValid = value.trim() !=='' && isValid;
    }

    if(rules.minLength){
        isValid = value.length > rules.minLength && isValid;
    }

    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }
    if(rules.isEmail){
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        isValid = pattern.test(value) && isValid;
    }



    
    return isValid;

}


inputChangedHandler = (event,controlName) => {
    const updatedControls  = {

        ...this.state.controls, [controlName] : {
...this.state.controls[controlName],
value : event.target.value,valid : this.checkValidity(event.target.value,this.state.controls[controlName].validation),
touched : true

        }
    };

    this.setState({controls : updatedControls});

}

submitHandler =(event)=> {

    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
}


render () {

const formElementsArray = [];

    for(let key in this.state.controls){
        formElementsArray.push({

            id : key,
            config : this.state.controls[key]
        })


    }

    const form  = formElementsArray.map(formElement => {
        return  <Input touched = {formElement.config.touched}
                shouldValidate = {formElement.config.validation} 
                invalid = {!formElement.config.valid} 
                changed = {(event)=>{this.inputChangedHandler(event,formElement.id)}} 
                key = {formElement.id} 
                elementType = {formElement.config.elementType} 
                elementConfig = {formElement.config.elementConfig} 
                value = {formElement.config.value}/>

    })

    return (

        <div className = {Classes.AuthForm}>
        
        <form onSubmit = {this.submitHandler}>
        {form}
        <Button btnType = "Success">Submit</Button>
        <Button btnType = "Danger" clicked = {this.switchAuthModeHandler}>SWITCH TO {this.state.isSignUp ? "SIGN IN" : "SIGN UP"}</Button>
        </form>
        
        </div>


    )


}

}

const mapDispatchToProps = dispatch => {

    return {

        onAuth : (email,password,isSignUp) => dispatch(actions.auth(email,password, isSignUp))
    }
}



export default connect(null, mapDispatchToProps)(Auth);


