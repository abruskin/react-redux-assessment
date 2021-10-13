import {Container, Col, Row, } from "react-bootstrap";
import Login from './components/Login';
import './App.css';
import {connect} from 'react-redux';
import {initiateLogin, initiateRegister, logout, registerFail} from "./modules/userM";
import Header from "./components/Header";
import Task from './components/Task';
import {getTasksByDate} from "./services/taskS";

function App({
    dispatch,
    loginPending,
    loginFail,
    token,
    registerPending,
    registerFail
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
              <Header handleLogoutRequest={() => dispatch(logout())}
              handleGetTasksRequest={(crit1, crit2) => dispatch(getTasksByDate(crit1, crit2))}/>

              <Row> <h2> Events </h2></Row>
      <Row> <h2> Invites </h2> </Row>

          <Task handleGetTasksByDate={() => dispatch(getTasksByDate())}/>

          <Row> <h2> Reminders </h2> </Row>

          </Container> )



}

function mapStateToProps(state) {
    return {...state.user}
}

export default connect(mapStateToProps) (App);
