import {Container} from "react-bootstrap";
import Login from './components/Login';
import './App.css';
import {connect} from 'react-redux';
import {initiateLogin, logout} from "./modules/userM";

function App({
    dispatch,
    loginPending,
    loginFail,
    token,
}) {

  function handleLoginRequest(username, password) {
    dispatch(initiateLogin({username, password}))
  }
  return (
    <Container>
      {token ? "Logged in" :
      <Login handleLoginRequest={handleLoginRequest}
             loginPending={loginPending}
             loginFailed={loginFail} />}

    </Container>
  );
}

function mapStateToProps(state) {
    return {...state.user}
}

export default connect(mapStateToProps) (App);
