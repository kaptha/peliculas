import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import imagen from '../images/mexico_2000.jpg';
export default function Pelicula() {
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
                         <Button className='redondo' variant="outline-warning">Ver trailer</Button>
                       </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Col>
                    </Row>
                </Container>
            </div>
       </div>
    </div>
  )
}
