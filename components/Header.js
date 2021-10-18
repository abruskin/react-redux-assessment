import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import {useState, useEffect} from "react";
import {initiateGetRemindersByDate} from "../modules/remindersM";


const Header = ({
                    handleLogoutRequest, handleGetTasksRequest, initiateGetTasksByDate, tasks, event,
                    initiateGetEventsbyDate, initiateGetRemindersByDate, reminder
                }) => {
    const [crit1, setCrit1] = useState('')
    const [crit2, setCrit2] = useState('')
    const [getTasksPending, setGetTasksPending] = useState(false)
    const [getEventsPending, setGetEventsPending] = useState(false)
    const [getRemindersPending, setGetRemindersPending] =useState(false)

    function onCrit1Change(event) {
        setCrit1(event.target.value)
    }

    useEffect(() => {
        console.log(crit1)
    }, [crit1])

    function onCrit2Change(event) {
        setCrit2(event.target.value)
    }

    useEffect(() => {
        console.log(crit2)
    }, [crit2])

    function onFetchAll(crit1, crit2) {
        setGetTasksPending(true)
        setGetEventsPending(true)
        setGetRemindersPending(true)
        console.log(crit1, crit2)
        initiateGetTasksByDate(crit1, crit2)
        initiateGetEventsbyDate(crit1, crit2)
        initiateGetRemindersByDate(crit1, crit2)
    }

    useEffect(() => {
        if (!getTasksPending) {
            setGetTasksPending(false)
        }
    }, [getTasksPending])

    useEffect(() => {
        if (!getEventsPending) {
            setGetEventsPending(false)
        }
    }, [getEventsPending])


    return (
        <Row className="my-4">
            <Col><h2>Welcome, Friend :) </h2></Col>

            <Form>
                <input id="crit1" type="date" placeholder="start date" onChange={onCrit1Change}/>
                <input id="crit2" type="date" placeholder="end date" onChange={onCrit2Change}/>
                <button type="button" onClick={() => onFetchAll(crit1, crit2)}> Fetch</button>
            </Form>

            <Col xs='auto'>
                <Button variant='outline-primary' onClick={handleLogoutRequest}>Logout</Button>
            </Col>
        </Row>
    )
}

export default Header