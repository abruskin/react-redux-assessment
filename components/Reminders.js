import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'


function Reminders({reminder, getRemindersPending}) {
    console.log(reminder)
    return (
        <>
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
