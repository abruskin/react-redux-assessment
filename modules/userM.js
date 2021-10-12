//Actions
import {requestLogin, requestRegister} from "../services/userS";

const LOGIN_REQUEST = 'user/LOGIN_REQUEST'
const LOGIN_PASS = 'user/LOGIN_PASS'
const LOGIN_FAIL = 'user/LOGIN_FAIL'

const LOGOUT = 'user/LOGOUT'

const REGISTER_REQUEST = 'user/REGISTER_REQUEST'
const REGISTER_PASS = 'user/REGISTER_PASS'
const REGISTER_FAIL = 'user/REGISTER_FAIL'

//Reducer
const initialState= {
    loginPending: false,
    loginFailed: false,
    token: '',
    registerPending: false,
    registerFailed: false
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST :
            return {
                ...state,
                loginPending: true
            };

        case LOGIN_PASS:
            return {
                ...state,
                loginPending: false,
                loginFailed: false,
                token: action.token
            };

        case LOGIN_FAIL:
            return {
                ...state,
                loginPending: false,
                loginFailed: true,
            };

        case LOGOUT:
            return {
                ...state,
                token: ''
        };

        case REGISTER_REQUEST :
            return {
                ...state,
                registerPending: true
            };

        case REGISTER_PASS:
            return {
                ...state,
                registerPending: false,
                registerFailed: false,
            };

        case REGISTER_FAIL:
            return {
                ...state,
                registerPending: false,
                registerFailed: true,
            };

        default: return state
    }
}
//Action Creators
export function loginRequest() {
    return {type:LOGIN_REQUEST}
}

export function loginPass(token) {
    return {type:LOGIN_PASS, token: token}
}

export function  loginFail() {
    return {type: LOGIN_FAIL}
}

export function logout() {
    return {type: LOGOUT}
}

export function registerRequest() {
    return {type:REGISTER_REQUEST}
}

export function registerPass() {
    return {type:REGISTER_PASS}
}

export function  registerFail() {
    return {type: REGISTER_FAIL}
}

//Side Effects
export function initiateLogin(credentials) {
    return function login(dispatch) {
        dispatch(loginRequest())
        requestLogin(credentials).then(response => {
            if (!response.ok) {
                dispatch(loginFail())
                return
            }
            response.json().then(data => {
                if (!data.token) {
                    dispatch(loginFail())
                    return
                }
                dispatch(loginPass(data.token))
            })
        })
    }
}



export function initiateRegister(credentials) {
    return function register(dispatch) {
        dispatch(registerRequest())
console.log(credentials)
        requestRegister(credentials).then(response => {
            if (!response.ok) {
                dispatch(registerFail())
                return
            } dispatch(registerPass())
            dispatch(initiateLogin(credentials))
        })
    }
}
