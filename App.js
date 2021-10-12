import {Container, Col, Row, } from "react-bootstrap";
import Login from './components/Login';
import './App.css';
import {connect} from 'react-redux';
import {initiateLogin, initiateRegister, logout, registerFail} from "./modules/userM";
import Header from "./components/Header";

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
              <Header handleLogoutRequest={() => dispatch(logout())}/>

              <Row> <h2> Events </h2></Row>
      <Row> <h2> Invites </h2> </Row>
          <Row> <h2> Tasks </h2> </Row>
          <Row> <h2> Reminders </h2> </Row>

          </Container> )



}

function mapStateToProps(state) {
    return {...state.user}
}

export default connect(mapStateToProps) (App);
