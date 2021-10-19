import {Button, Row, Col, Card, Placeholder, Modal, Form, Badge} from 'react-bootstrap'


function Events({item, getEventsPending}) {
    console.log(item)
    return (
        <>
            {
                item && !getEventsPending ?
                    item.map((item, id) => {
                        return <> <Card key={id}>
                            <Card.Body>
                                <Card.Subtitle> {item.start_timestamp} - {item.end_timestamp} </Card.Subtitle>
                                <Card.Text>   {item.title} </Card.Text>
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
