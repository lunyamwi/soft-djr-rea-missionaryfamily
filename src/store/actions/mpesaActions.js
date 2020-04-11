import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const getMpesa = (data) => async dispatch => {
    dispatch({
        type: actionTypes.CREATE_MPESA_START
    });
    await axios
        .post("http://127.0.0.1:8000/mpesa/mpesa_payments/", data)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: actionTypes.CREATE_MPESA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: actionTypes.CREATE_MPESA_FAIL,
                payload: err.response.data
            })
        })
        
}
