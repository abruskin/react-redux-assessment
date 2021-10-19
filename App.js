import {Container, Col, Row,} from "react-bootstrap";
import Login from './components/Login';
import './App.css';
import {connect} from 'react-redux';
import {initiateLogin, initiateRegister, logout, registerFail} from "./modules/userM";
import Header from "./components/Header";
import Tasks from "./components/Task";
import {initiateGetEventsByDate} from "./modules/EventsM";
import { initiateCreateTask, initiateGetTasksByDate} from "./modules/taskM";
import Events from "./components/Events";
import {initiateCreateReminder, initiateGetRemindersByDate} from "./modules/remindersM";
import Reminders from "./components/Reminders";



function App({
                 dispatch,
                 loginPending,
                 loginFail,
                 token,
                 registerPending,
                 registerFail,
                 tasks,
                 getTasksPass,
                 getTasksPending,
                 getTasksFail,
                 item,
                 getEventsPass,
                 getEventsPending,
                 getEventsFail,
                 reminder,
                 getRemindersPass,
                 getRemindersPending,
                 getRemindersFail,
    task,
    createTaskPass,
    createTaskPending,
    createTaskFail,
newReminder,
    createReminderPass,
    createReminderPending,
    createReminderFail,



             }) {

    function handleLoginRequest(username, password) {
        dispatch(initiateLogin({username, password}))
    }

    function handleRegisterRequest(username, password) {
        dispatch(initiateRegister({username, password}))
    }

    function handleLogoutRequest() {
        dispatch(logout())
    }

    function handleError(error) {
        console.log(error)
    }




    if (!token)
        return (
            <Login handleLoginRequest={handleLoginRequest}
                   loginPending={loginPending}
                   loginFailed={loginFail}
                   handleRegisterRequest={handleRegisterRequest}
                   registerPending={registerPending}
                   registerFailed={registerFail}/>
        )
    return (
        <Container>
            <Header
                handleLogoutRequest={() => dispatch(logout())}
                initiateGetTasksByDate={(crit1, crit2) => dispatch(initiateGetTasksByDate(crit1, crit2))}
                initiateGetEventsbyDate={(crit1, crit2) => dispatch(initiateGetEventsByDate(crit1, crit2))}
                initiateGetRemindersByDate={(crit1, crit2) => dispatch(initiateGetRemindersByDate(crit1, crit2))}
            />

            <Row><h1> Events </h1> <Events item={item}
                                           getEventsPending={getEventsPending}
                                           getEventsPass={getEventsPass}
                                           getEventsFail={getEventsFail}/> </Row>

            <Row><h2> Invites </h2></Row>


            <Row> <Tasks tasks={tasks}
                         getTasksPending={getTasksPending}
                         getTasksPass={getTasksPass}
                         getTasksFail={getTasksFail}
                         task={task}
                         initiateCreateTask={(task) => dispatch(initiateCreateTask(task))}
                         createTaskPending={createTaskPending}
                         createTaskPass={createTaskPass}
                         createTaskFail={createTaskFail}

            /> </Row>


            <Row> <Reminders
                reminder={reminder}
                getRemindersPending={getRemindersPending}
                getRemindersPass={getRemindersPass}
                getRemindersFail={getRemindersFail}
            createReminderPending={createReminderPending}
            createReminderPass={createReminderPass}
            createReminderFail={createReminderFail}
            initiateCreateReminder={(newReminder) => dispatch(initiateCreateReminder(newReminder))}/>
            </Row>

        </Container>)


}

function mapStateToProps(state) {
    return {
        ...state.user,
        ...state.tasks,
        ...state.event,
        ...state.reminder,
    }
}

export default connect(mapStateToProps)(App);
