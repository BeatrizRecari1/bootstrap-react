import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './layout.css'
import Modal from 'react-bootstrap/Modal'


export default function Layout() {
    const[show, setShow] = useState(false);
    const[fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        

        <Container fluid>

            <Row>
                <Col><h1>Hello My Is... What</h1></Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>Col 1</Col>
                <Col xs={12} sm={6}>Col 2</Col>
                <Col>Col 3</Col>
            </Row>
            <Row>
            <Col>
            
            <Button variant="danger" onClick={handleShow}>Launch Modal</Button>
            </Col>

            </Row>
                <Col>
                <img src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp" 
                width="100%"
                onClick={handleShow} />
                </Col>
            <Row>

            </Row>

            <Row>
                <Col>
                    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                        

                        <Modal.Body>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kPaCGHDyfhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>

    
    )
}