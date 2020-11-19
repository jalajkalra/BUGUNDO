import {AUTH_SUCCESS,AUTH_INIT,AUTH_FAIL} from '../actionType';
import {secret} from '../../config/config';
import CryptoJS from 'crypto-js';
import {Logout} from './logout';

export const AUTHUser = (data,type)=>{
    return async dispatch=>{
        dispatch(AUTHinit());
        try{
            let url;
            if(type==="login"){
                url = 'http://localhost:5000/user/login'
            }else if(type==="registration"){
                url = 'http://localhost:5000/user/registration'
            }
            console.log(data);
            const response = await fetch(url,{
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            if(json.message==='success'){
                const encryptedToken = CryptoJS.AES.encrypt(json.token,`${secret}`);
                const encryptedUserId = CryptoJS.AES.encrypt(`${json.user.id}`,`${secret}`);
                const encryptedEmail = CryptoJS.AES.encrypt(`${json.user.email}`,`${secret}`);
                localStorage.setItem("Ab291Xy5Qrt1B259", encryptedToken);
                localStorage.setItem("Ab291Xy5Qrt1C259", encryptedUserId);
                localStorage.setItem("Ab291Xy5Qrt1D259", encryptedEmail);
                dispatch(AUTHSuccess({userID:encryptedUserId,token:encryptedToken,email:encryptedEmail}));
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


export const checkAuthState = ()=>{
    return async dispatch=>{
        const token = localStorage.getItem('Ab291Xy5Qrt1B259');
        const email = localStorage.getItem('Ab291Xy5Qrt1D259');
        const userID = localStorage.getItem('Ab291Xy5Qrt1C259');
        if(!token){
            dispatch(Logout());
        }else{
            const userToken = CryptoJS.AES.decrypt(token,`${secret}`).toString(CryptoJS.enc.Utf8);
            const userEmail = CryptoJS.AES.decrypt(email,`${secret}`).toString(CryptoJS.enc.Utf8);
            dispatch(AUTHinit())
            const response = await fetch('http://localhost:5000/user/checkAuth',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({token:userToken,email:userEmail})
            });
            const json = await response.json();
            if(json.message === "Success"){
                dispatch(AUTHSuccess({userID,email,token}));
            }else{
                dispatch(Logout())
            }
        }
    }
}