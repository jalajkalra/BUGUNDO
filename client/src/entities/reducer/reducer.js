import {AUTH_INIT,AUTH_SUCCESS,AUTH_FAIL, LOGOUT_SUCCESS,LOGOUT_FAIL} from '../actionType';

const initialState = {
    apiResponse: null,
    isLoggedIn:false,
    isLoading: false,
    error:null
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case AUTH_INIT:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                apiResponse: action.payload,
             
                isLoggedIn:true,
                isLoading: false
            }
        case AUTH_FAIL:
            return {
                ...state,
                isLoggedIn:false, 
                isLoading: false,
    
                error: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                apiResponse:null,
                isLoggedIn:false,
                isLoading:false,
           
            }
        case LOGOUT_FAIL:
            return{
                ...state,
                error:action.payload
            }        
        default: return state             
    }
};

export default Reducer;

