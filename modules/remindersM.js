//Actions
import {getRemindersByDate} from '../services/remindersS';


const GETREMINDERS_REQUEST = 'task/GETREMINDERS_REQUEST'
const GETREMINDERS_PASS = 'task/GETREMINDERS_PASS'
const GETREMINDERS_FAIL = 'task/GETREMINDERS_FAIL'



//Reducer
const initialState={
    getRemindersPending: false,
    getRemindersFail: false,
    reminders: [],

}

export default function reducer(state=initialState, action) {
    switch (action.type) {

        case GETREMINDERS_REQUEST:
            return {
                ...state,
                getRemindersPending: true
            };

        case GETREMINDERS_PASS:
            return {
                ...state,
                getRemindersPending: false,
                getRemindersFail: false,
                reminder: action.reminder
            };

        case GETREMINDERS_FAIL:
            return {
                ...state,
                getRemindersPending: false,
                getRemindersFail: true
            };

        default:
            return state
    }}


export function getRemindersRequest() {
    return {type:GETREMINDERS_REQUEST}
}

export function getRemindersPass(reminder) {
    console.log(reminder)
    return {type: GETREMINDERS_PASS, reminder}
}

export function getRemindersFail() {
    return {type: GETREMINDERS_FAIL}
}

//Side Effects


export function initiateGetRemindersByDate(crit1, crit2) {
    console.log('here')
    return function (dispatch, getState) {
        console.log(getState())
        dispatch(getRemindersRequest())
        getRemindersByDate(getState().user.token, crit1, crit2)
            .then(response => {
                console.log('here')
                if (!response) {
                    console.log('here')
                    dispatch(getRemindersFail())
                    return
                }
                if (!response.ok) {
                    console.log('here')
                    dispatch(getRemindersFail())
                    return
                }
                response.json().then(json => {
                    if (!json.message) {
                        console.log('here')
                        dispatch(getRemindersFail())
                    }

                    dispatch(getRemindersPass(json.message));
                    console.log(json.message)

                })
            })
    }
}


