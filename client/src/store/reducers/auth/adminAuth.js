import { LOGIN_ADMIN, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_SUCCESS, REGISTER_ADMIN, REGISTER_ADMIN_FAIL, REGISTER_ADMIN_SUCCESS } from "src/store/actions/actionTypes/auth";

const initialState = {
    login: {
        data: null,
        loading: false,
        error: null,
        response: null
    },
    register: {
        data: null,
        loading: false,
        error: null,
        response: null
    }
};

export const adminAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ADMIN:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: true,
                    data: null,
                    error: null,
                    status: null
                }
            }
        case REGISTER_ADMIN_SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    data: action.payload.data,
                    error: null,
                    status: action.payload.status
                }
            }
        case REGISTER_ADMIN_FAIL:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    data: null,
                    error: action.payload.data,
                    status: action.payload.status
                }
            }
        case LOGIN_ADMIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true,
                    data: null,
                    error: null,
                    status: null
                }
            }
        case LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    data: action.payload.data,
                    error: null,
                    status: action.payload.status
                }
            }
        case LOGIN_ADMIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    data: null,
                    error: action.payload.data,
                    status: action.payload.status
                }
            }
    }
}