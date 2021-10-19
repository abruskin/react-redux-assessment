import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'
import {useState} from "react"

function Reminders({reminder, getRemindersPending, initiateCreateReminder}) {
    const [show, setShow] =useState(false);
    const [newReminder, setNewReminderText] = useState(false);
    const handleClose=() => setShow(false);
    const handleShow= () => setShow(true);

    function handleReminderTextChange(event){
    setNewReminderText(event.target.value)}

    function handleSubmit(event) {
        event.preventDefault()
        initiateCreateReminder(newReminder)
        console.log(newReminder)
        console.log('here')
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> New Reminder </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label> reminder </Form.Label>
                        <Form.Control type="text" placeholder="enter reminder text" onChange={handleReminderTextChange} />
                        <Button variant="outline-success" type="submit" onClick={handleSubmit}> Submit </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <h1> Reminders </h1>
            <Button variant="success" onClick={handleShow}> +Reminder </Button>
            {
                reminder && !getRemindersPending ?
                    reminder.map((reminder, id) => {
                        return <> <Card key={id}>
                            <Card.Body>
                                <Card.Subtitle> {reminder.timestamp}  </Card.Subtitle>
                                <Card.Text>   {reminder.title} </Card.Text>
                            </Card.Body>
                        </Card> </>
                    })
                    :
                    <>
                        <Row> This is where your reminders will appear </Row> </>
            }
        </>
    )
}

export default Reminders
