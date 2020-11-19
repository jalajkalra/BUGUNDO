import {LOGOUT_SUCCESS,LOGOUT_FAIL } from '../actionType';

export const Logout = ()=>{
    return  dispatch=>{
        try{
            localStorage.removeItem("Ab291Xy5Qrt1B289");
            localStorage.removeItem("Ab291Xy5Qrt1C259");
            localStorage.removeItem("expirationDate");;
            dispatch({
                type:LOGOUT_SUCCESS,
            })
        }catch(err){
            dispatch({
                type:LOGOUT_FAIL,
                payload:err
            })
        }
    }
}