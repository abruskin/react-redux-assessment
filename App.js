
import {Container, Col, Row, } from "react-bootstrap";
import Login from './components/Login';
import './App.css';
import {connect} from 'react-redux';
import {initiateLogin, initiateRegister, logout, registerFail} from "./modules/userM";
import Header from "./components/Header";
import Tasks from "./components/Task";
import {initiateGetEventsByDate} from "./modules/EventsM";
import { initiateGetTasksByDate } from "./modules/taskM";
import Events from "./components/Events";
import {initiateGetRemindersByDate} from "./modules/remindersM";
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
    event,
    getEventsPass,
    getEventsPending,
    getEventsFail,
    reminder,
    getRemindersPass,
    getRemindersPending,
    getRemindersFail,


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

                  <Row> <h1> Events </h1> <Events event={event}
                                                        getEventsPending={getEventsPending}
                                                        getEventsPass={getEventsPass}
                                                  getEventsFail={getEventsFail} /> </Row>

      <Row> <h2> Invites </h2> </Row>


                  <Row> <h1> Tasks </h1> <Tasks tasks={tasks}
          getTasksPending={getTasksPending}
          getTasksPass={getTasksPass}
                 getTasksFail={getTasksFail}
          /> </Row>


          <Row> <h2> Reminders </h2> <Reminders
              reminder={reminder}
              getRemindersPending={getRemindersPending}
              getRemindersPass={getRemindersPass}
              getRemindersFail={getRemindersFail} />
          </Row>

          </Container> )



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
