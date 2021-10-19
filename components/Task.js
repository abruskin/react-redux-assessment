import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'
import {useState} from "react";
import {initiateCreateTask, initiateGetTasksByDate} from "../modules/taskM";

function Tasks({tasks, getTasksPending, createTaskPending, initiateCreateTask }) {
    const [show, setShow] =useState(false);
    const [task, setTaskText] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function handleTextChange(event) {
    setTaskText(event.target.value)
}

function handleSubmit(event) {
    event.preventDefault()
    initiateCreateTask(task)
    console.log(task)
    console.log('here')
    handleClose()
}

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title> New Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Label> task </Form.Label>
                        <Form.Control type="text" placeholder="enter task" onChange={handleTextChange}/>
<Button variant="outline-success" type="submit" onClick={handleSubmit}> Submit </Button>
                    </Form>
                </Modal.Body>


            </Modal>



            <h1> Tasks</h1>
            <Button variant={"success"} onClick={handleShow}> +Task </Button>
            {
                tasks && !getTasksPending ?
                    tasks.map((tasks, id) => {
                       return <> <Card key = {id}>
                            <Card.Body>
                                <Card.Subtitle> {tasks.timestamp} </Card.Subtitle>
                              <Card.Text>   {tasks.title} </Card.Text>
                            </Card.Body>
                        </Card> </>
                    })
                    :
                    <>
                        <Row> This is where your tasks will appear </Row> </>
            }
        </>
    )
}

export default Tasks
