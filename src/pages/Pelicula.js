import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imagen from '../images/mexico_2000.jpg';
import Footer from '../components/Footer';
export default function Pelicula() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <div className='pelicula'>
            <div className='glass-peli'>
                <Container>
                    <Row>
                       <Col><Image src={imagen}></Image></Col>
                       <Col>
                         <h5>Mexico 2000</h5>
                         <h5>120min</h5>
                         <h5>Director</h5>
                         <Button className='redondo' variant="outline-warning" onClick={handleShow}>Ver trailer</Button>
                       </Col>
                    </Row>
                      
                    <Row>
                        <Col>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                    </Row>
                </Container>
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <video controls>
        <source  type="video/*" />
        Tu navegador no soporta la reproducción de video.
      </video>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
            </div>
       </div>
       <Footer></Footer>
    </div>
  )
}
