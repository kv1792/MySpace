import * as actionTypes from './actionsTypes';
import axios from 'axios';


export const authStart = () => {

    return {

        type : actionTypes.AUTH_START

    }
}


export const authSuccess = (authData) => {
return {

    type : actionTypes.AUTH_SUCCESS,
    authData : authData
}

}


export const authFailed = (error) => {

    return {
        type : actionTypes.AUTH_FAILED,
        error : error
    }
}


export const auth = (email,password, isSignUp) =>{

    return dispatch => {

        dispatch(authStart());
        const authData = {

            email : email,
            password : password,
            returnSecureToken : true
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCJ6FLDNd1ZDWvVDoBAypnJXO1cQq6hzdY';
            if(!isSignUp){
                url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCJ6FLDNd1ZDWvVDoBAypnJXO1cQq6hzdY';
            }
            
            axios.post(url, authData )
        .then(response=>{
            console.log(response)
            dispatch(authSuccess(response.data));
        })
        .catch(error=>{
            dispatch(authFailed(error));
        })
    }
}