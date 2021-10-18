import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'


function Tasks({tasks, getTasksPending}) {
    console.log(tasks)
    return (
        <>
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
