//Actions
import { getTasksByDate } from '../services/taskS';
import {requestCreateTask} from "../services/userS";

const GETTASKS_REQUEST = 'task/GETTASKS_REQUEST'
const GETTASKS_PASS = 'task/GETTASKS_PASS'
const GETTASKS_FAIL = 'task/GETTASKS_FAIL'

// const CREATETASK_REQUEST = 'task/CREATETASK_REQUEST'
// const CREATETASK_PASS = 'task/CREATETASK_PASS'
// const CREATETASK_FAIL = 'task/CREATETASK_FAIL'

//Reducer
const initialState={
    getTasksPending: false,
    getTasksFail: false,
    tasks: [],
    // createTaskPending: false,
    // createTaskFail: false
}

export default function reducer(state=initialState, action) {
    switch (action.type) {

        case GETTASKS_REQUEST:
            return {
                ...state,
                getTasksPending: true
            };

        case GETTASKS_PASS:
            return {
                ...state,
                getTasksPending: false,
                getTasksFail: false,
                tasks: action.tasks
            };

        case GETTASKS_FAIL:
            return {
                ...state,
                getTasksPending: false,
                getTasksFail: true
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

export function getTasksRequest() {
    return {type:GETTASKS_REQUEST}
}

export function getTasksPass(tasks) {
    console.log(tasks)
    return {type: GETTASKS_PASS, tasks}
}

export function getTasksFail() {
    return {type: GETTASKS_FAIL}
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

export function initiateGetTasksByDate() {
    console.log("initiateGetTasksByDate fired")
    return function (dispatch, getState) {
        console.log('here')
        const tempState = getState()
        // dispatch(getTasksRequest())
        getTasksByDate(getState().user.token)
            .then(response => {
            console.log('here')
            if (!response.ok) {
                dispatch(getTasksFail())
                return
            }
            response.json().then(json => {
                if (!json.message) {
                    dispatch(getTasksFail())
                }

                dispatch(getTasksPass(json.message))

            })
        })
    }
}

