//Actions
import {requestLogin} from "../services/userS";

const LOGIN_REQUEST = 'user/LOGIN_REQUEST'
const LOGIN_PASS = 'user/LOGIN_PASS'
const LOGIN_FAIL = 'user/LOGIN_FAIL'

const LOGOUT = 'user/LOGOUT'

//Reducer
const initialState= {
    loginPending: false,
    loginFailed: false,
    token: ''
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

//Side Effects
export function initiateLogin(credentials) {
    return function login(dispatch) {
        dispatch(loginRequest())
        console.log('here')
        requestLogin(credentials).then(response => {
            console.log(credentials)
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
                console.log(data.token)
            })
        })
    }
}