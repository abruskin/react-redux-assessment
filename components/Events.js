import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'


function Events({events, getEventsPending}) {
    console.log(events)
    return (
        <>
            {
                events && !getEventsPending ?
                    events.map((events, idx) => {
                        return <> <Card key={idx}>
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
