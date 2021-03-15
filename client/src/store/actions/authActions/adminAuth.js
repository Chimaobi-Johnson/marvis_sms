import axios from 'axios';
import {LOGIN_ADMIN, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_SUCCESS, REGISTER_ADMIN, REGISTER_ADMIN_FAIL, REGISTER_ADMIN_SUCCESS} from '../actionTypes/auth';


export const registerAdmin = (data) => (dispatch) => {
    dispatch({type: REGISTER_ADMIN});
    axios.post(`/api/admin/register`, data, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        dispatch({type: REGISTER_ADMIN_SUCCESS, payload: response});
    }).catch((err) => {
        dispatch({type: REGISTER_ADMIN_FAIL, payload: err.response});
    });
};


export const loginAdmin = (data) => (dispatch) => {
    dispatch({type: LOGIN_ADMIN});
    axios.post(`/api/admin/login`, data, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        dispatch({type: LOGIN_ADMIN_SUCCESS, payload: response});
    }).catch((err) => {
        dispatch({type: LOGIN_ADMIN_FAIL, payload: err.response});
    });
};
