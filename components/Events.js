import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'


function Events({event, getEventsPending}) {
    console.log(event)
    return (
        <>
            {
                event && !getEventsPending ?
                    event.map((events, id) => {
                        return <> <Card key={id}>
                            <Card.Body>
                                <Card.Subtitle> {events.start_timestamp} - {events.end_timestamp} </Card.Subtitle>
                                <Card.Text>   {events.title} </Card.Text>
                            </Card.Body>
                        </Card> </>
                    })
                    :
                    <>
                        <Row> This is where your events will appear </Row> </>
            }
        </>
    )
}

export default Events
