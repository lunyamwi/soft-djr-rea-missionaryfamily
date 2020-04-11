import { CREATE_MPESA_START, CREATE_MPESA_FAIL, CREATE_MPESA_SUCCESS } from '../actions/actionTypes';


const initialState = {
    isLoading:false,
    errors:{},
    data:{}
}

const mpesaReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_MPESA_START:
            return{
                ...state,
                isLoading:true
            };
        case CREATE_MPESA_SUCCESS:
            return{
                ...state,
                data:action.payload
            };
        case CREATE_MPESA_FAIL:
            return{
                ...state,
                errors:action.payload
            };
        default:
            return state
    }
}

export default mpesaReducer;