import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Header = ({handleLogoutRequest}) => {
    return (
        <Row className="my-4">
            <Col><h2>Welcome, Friend :) </h2></Col>

            <Col xs='auto'>
                <Button variant='outline-primary' onClick={handleLogoutRequest}>Logout</Button>
            </Col>
        </Row>
    )
}

export default Header