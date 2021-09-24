import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_RESET,
    REGISTER_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from "../constants/authConstans"


// Login
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

// user create reducer
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { loading: true }
        case REGISTER_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_RESET:
            return {}
        default:
            return state
    }
}