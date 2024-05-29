import {isValidUsername} from '6pp'

// isValidUsername returns true or false , if true menas no symbol space in username

export const usernamevalidator =(username)=>{
    if(!isValidUsername(username))
    return { isValid: false, errorMessage: "Username is invalid"}
};