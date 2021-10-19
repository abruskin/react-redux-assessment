//Actions
import {createTask, getTasksByDate} from '../services/taskS';

const GETTASKS_REQUEST = 'task/GETTASKS_REQUEST'
const GETTASKS_PASS = 'task/GETTASKS_PASS'
const GETTASKS_FAIL = 'task/GETTASKS_FAIL'

const CREATETASK_REQUEST = 'task/CREATETASK_REQUEST'
const CREATETASK_PASS = 'task/CREATETASK_PASS'
const CREATETASK_FAIL = 'task/CREATETASK_FAIL'

//Reducer
const initialState={
    getTasksPending: false,
    getTasksFail: false,
    tasks: [],
    createTaskPending: false,
    createTaskFail: false,
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

        case CREATETASK_REQUEST:
            return {
                ...state,
                createTaskPending: true
            }

        case CREATETASK_PASS:
            return {
                ...state,
                createTaskPending: false,
                createTaskFail: false,
            }

        case CREATETASK_FAIL:
            return {
                ...state,
                createTaskPending: false,
                createTaskFail: true
            }

        default:
            return state
    }}
//Action Creators
export function getTasksRequest() {
    return {type:GETTASKS_REQUEST}
}

export function getTasksPass(tasks) {
   // console.log(tasks)
    return {type: GETTASKS_PASS, tasks}
}

export function getTasksFail() {
    return {type: GETTASKS_FAIL}
}

export function createTaskRequest() {
    return {type: CREATETASK_REQUEST}
}

export function createTaskFail() {
    return {type: CREATETASK_FAIL}
}

export function createTaskPass() {
    return {type: CREATETASK_PASS}
}

// Side Effects



export function initiateGetTasksByDate(crit1, crit2) {
    console.log(crit1, crit2)
    return function (dispatch, getState) {
        console.log(getState())
        dispatch(getTasksRequest())
        getTasksByDate(getState().user.token, crit1, crit2)
            .then(response => {
            console.log('here')
                if (!response) {
                    console.log('here')
                    dispatch(getTasksFail())
                    return
                }
            if (!response.ok) {
                console.log('here')
                dispatch(getTasksFail())
                return
            }
            response.json().then(json => {
                if (!json.message) {
                    console.log('here')
                    dispatch(getTasksFail())
                }

                dispatch(getTasksPass(json.message));
                console.log(json.message)

            })
        })
    }
}

export function initiateCreateTask(task) {
return function (dispatch, getState) {
    console.log('here')
    dispatch(createTaskRequest())
    createTask(getState().user.token, task).then(response => {
        if(!response.ok) {
            console.log('here')
            dispatch(createTaskFail())
            return
        }
        response.json().then(json => {
            if(!json.message) {
                console.log('here')
                dispatch(createTaskFail())
                return
            }
            if (json.message !== 'task created') {
                dispatch(createTaskFail())
                console.log('here')
                return;
            }
            dispatch(createTaskPass())
            console.log('here')
        }, () => dispatch(createTaskFail()))
        }, () => dispatch(createTaskFail())
    )
}}

