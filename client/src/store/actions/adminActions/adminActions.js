import axios from 'axios';


export const fetchAdmin = (data) => (dispatch) => {
    dispatch({type: REGISTER_ADMIN});
    axios.post(`/api/admin/current_user`, data, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        dispatch({type: REGISTER_ADMIN_SUCCESS, payload: response});
    }).catch((err) => {
        dispatch({type: REGISTER_ADMIN_FAIL, payload: err.response});
    });
};
