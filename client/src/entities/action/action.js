import {AUTH_SUCCESS,AUTH_INIT,AUTH_FAIL,CLEAR_ERROR, ADD_DATA} from '../actionType';
import {secret} from '../../config/config';
import CryptoJS from 'crypto-js';
import {Logout} from './logout';

export const AUTHUser = (data,type)=>{
    return async dispatch=>{
        dispatch(AUTHinit());
        try{
            let url;
            if(type==="login"){
                url = 'http://localhost:8000/user/login'
            }else if(type==="registration"){
                url = 'http://localhost:8000/user/registration'
            }
            const response = await fetch(url,{
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            if(json.message==="success"){
                const encryptedToken = CryptoJS.AES.encrypt(json.token,`${secret}`);
                const encryptedUserId = CryptoJS.AES.encrypt(`${json.userID}`,`${secret}`);
                localStorage.setItem("Ab291Xy5Qrt1B259", encryptedToken);
                localStorage.setItem("Ab291Xy5Qrt1C259", encryptedUserId);
                dispatch(AUTHSuccess({userID:encryptedUserId,token:encryptedToken}));
            }else{
                dispatch(AUTHFailed(json.error));
                console.log(json.error)
            }
        }catch(err){
            dispatch(AUTHFailed(err));
        }
    }
}
export const AUTHSuccess = ( response ) => {
    return {
        type: AUTH_SUCCESS,
        payload: response
    };
};

export const AUTHFailed = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};

export const AUTHinit = () => {
    return {
        type: AUTH_INIT
    }
}

export const clearError = ()=>{
    return{
        type: CLEAR_ERROR
    }
}

export const add = ()=>{
    return async dispatch=>{
        const res = await fetch('http://localhost:8000/data/bug',{
            method:'get'
        });
        const json = await res.json();
        dispatch(addData(json));
    }
}

export const addData = (data)=>{
    return{
        type: ADD_DATA,
        highRank:data.highRank,
        mediumRank:data.mediumRank,
        lowRank:data.lowRank
    }
}

export const checkAuthState = ()=>{
    return async dispatch=>{
        const token = localStorage.getItem('Ab291Xy5Qrt1B259');
        const userID = localStorage.getItem('Ab291Xy5Qrt1C259');
        if(!token){
            dispatch(Logout());
        }else{
            const userId = CryptoJS.AES.decrypt(userID,`${secret}`).toString(CryptoJS.enc.Utf8);
            dispatch(AUTHinit())
            const response = await fetch('http://localhost:8000/user/checkAuth',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({userId})
            });
            const json = await response.json();
            if(json.message === "success"){
                const encryptedToken = CryptoJS.AES.encrypt(json.token,`${secret}`);
                const encryptedUserId = CryptoJS.AES.encrypt(`${json.userID}`,`${secret}`);
                dispatch(AUTHSuccess({userID:encryptedUserId,token:encryptedToken}));
            }else{
                dispatch(Logout())
            }
        }
    }
}