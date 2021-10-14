import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import {useState, useEffect} from "react";

const Header = ({handleLogoutRequest, handleGetTasksRequest, initiateGetTasksByDate}) => {
    const [crit1, setCrit1] = useState('')
    const [crit2, setCrit2] = useState('')

    function onCrit1Change(event) {
        setCrit1(event.target.value)
       // console.log(crit1)
    }

    useEffect( ()=> {
        console.log(crit1)
    }, [crit1])

    function onCrit2Change(event) {
        setCrit2(event.target.value)
        //  console.log(crit2)
    }
        useEffect( ()=> {
            console.log(crit2)
        }, [crit2])


    // function handleGetTasks(event) {
    //     console.log('here')
    //     dispatch(initiateGetTasksByDate(crit1, crit2))
    //
    // }

    return (
        <Row className="my-4">
            <Col><h2>Welcome, Friend :) </h2></Col>

            <Form>
            <input id="crit1" type="date" placeholder="start date" onChange={onCrit1Change}/>
                <input id="crit2" type="date" placeholder="end date" onChange={onCrit2Change} />
                <button type="button" onClick={initiateGetTasksByDate} > Fetch </button>
            </Form>

            <Col xs='auto'>
                <Button variant='outline-primary' onClick={handleLogoutRequest}>Logout</Button>
            </Col>
        </Row>
    )
}

export default Header