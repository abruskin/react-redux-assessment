//Actions
import {getEventsByDate} from '../services/EventsS';


const GETEVENTS_REQUEST = 'task/GETEVENTS_REQUEST'
const GETEVENTS_PASS = 'task/GETEVENTS_PASS'
const GETEVENTS_FAIL = 'task/GETEVENTS_FAIL'

// const CREATETASK_REQUEST = 'task/CREATETASK_REQUEST'
// const CREATETASK_PASS = 'task/CREATETASK_PASS'
// const CREATETASK_FAIL = 'task/CREATETASK_FAIL'

//Reducer
const initialState={
    getEventsPending: false,
    getEventsFail: false,
    events: [],
    // createTaskPending: false,
    // createTaskFail: false
}

export default function reducer(state=initialState, action) {
    switch (action.type) {

        case GETEVENTS_REQUEST:
            return {
                ...state,
                getEventsPending: true
            };

        case GETEVENTS_PASS:
            return {
                ...state,
                getEventsPending: false,
                getEventsFail: false,
                events: action.events
            };

        case GETEVENTS_FAIL:
            return {
                ...state,
                getEventsPending: false,
                getEventsFail: true
            };


        // case CREATETASK_REQUEST :
        //     return {
        //         ...state,
        //         createTaskPending: true
        //     };
        //
        // case CREATETASK_PASS:
        //     return {
        //         ...state,
        //         createTaskPending: false,
        //         createTaskFail: false,
        //     };
        //
        // case CREATETASK_FAIL:
        //     return {
        //         ...state,
        //         createTaskPending: false,
        //         createTaskFail: true,
        //    };
        default:
            return state
    }}
//Action Creators
// export function createTaskRequest() {
//     return {type:CREATETASK_REQUEST}
// }
//
// export function createTaskPass() {
//     return {type:CREATETASK_PASS}
// }
//
// export function  createTaskFail() {
//     return {type: CREATETASK_FAIL}
// }

export function getEventsRequest() {
    return {type:GETEVENTS_REQUEST}
}

export function getEventsPass(events) {
     console.log(events)
    return {type: GETEVENTS_PASS, events}
}

export function getEventsFail() {
    return {type: GETEVENTS_FAIL}
}

//Side Effects
// export function initiateCreateTask() {
//     return function createTask(dispatch) {
//         dispatch(createTaskRequest())
//         requestCreateTask().then(response => {
//             if (!response.ok) {
//                 dispatch(createTaskFail())
//                 return
//             }
//
//                 dispatch(createTaskPass())
//             })
//         }
//     }

export function initiateGetEventsByDate(crit1, crit2) {
    console.log('here')
    return function (dispatch, getState) {
        console.log(getState())
        dispatch(getEventsRequest())
        getEventsByDate(getState().user.token, crit1, crit2)
            .then(response => {
                console.log('here')
                if (!response) {
                    console.log('here')
                    dispatch(getEventsFail())
                    return
                }
                if (!response.ok) {
                    console.log('here')
                    dispatch(getEventsFail())
                    return
                }
                response.json().then(json => {
                    if (!json.message) {
                        console.log('here')
                        dispatch(getEventsFail())
                    }

                    dispatch(getEventsPass(json.message));
                    console.log(json.message)

                })
            })
    }
}


