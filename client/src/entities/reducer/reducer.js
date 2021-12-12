import {AUTH_INIT,AUTH_SUCCESS,AUTH_FAIL, LOGOUT_SUCCESS,LOGOUT_FAIL, CLEAR_ERROR,ADD_DATA} from '../actionType';

const initialState = {
    apiResponse: null,
    isLoggedIn:false,
    isLoading: false,
    data:{},
    error:false
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_DATA:
            return{
                ...state,
                data:action.payload,
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error:false
            }
        case AUTH_INIT:
            return {
                ...state,
                isLoading: true,
                error:false
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                apiResponse: action.payload,
             
                isLoggedIn:true,
                isLoading: false,
                error:false
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
                error:false
           
            }
        case LOGOUT_FAIL:
            return{
                ...state,
                error:true
            }        
        default: return state             
    }
};

export default Reducer;

